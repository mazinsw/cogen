import { CommonField } from '@/ast/entity/common-field';
import { Field } from '@/ast/entity/field';
import { Table } from '@/ast/entity/table';
import { normalize } from '@/util/normalize';

/**
 * Compact field from Field, Field1, Field2 to Field[1..3]
 *
 * @param table table with fields
 *
 * @return
 *   map fields with key as name and value as common field get the interval list
 *   separated with semicolon calling toString, example: 1:2;1:3, multidimensional
 *   array with bounds 1 to 2 and 1 to 3
 */
export function makeIndexedFields(table: Table): Map<string, CommonField> {
  const indexedFields = new Map<string, CommonField>();
  const staticFields: Field[] = [];
  for (const field of table.fields) {
    const normalizedName = normalize(field.name);
    if (!/^[a-zA-Z]+\[\d+\]/.test(normalizedName)) {
      staticFields.push(field);
      continue;
    }
    const indexes: number[] = [];
    const regex = /\[(\d+)\]/g;
    let result: RegExpExecArray | null;
    while ((result = regex.exec(normalizedName))) {
      indexes.push(+result[1]);
    }
    const staticName = normalizedName.replace(/\[\d+\]\.?/g, '');
    const commonField = indexedFields.get(staticName) || new CommonField();
    if (!indexedFields.has(staticName)) {
      indexedFields.set(staticName, commonField);
    }
    commonField.addField(field);
    commonField.applyRanges(indexes);
  }
  // increment last range for fields with same name as indexed
  for (const field of staticFields) {
    let staticName = field.getNormalizedName();
    if (!indexedFields.has(staticName)) {
      continue;
    }
    const commonField = indexedFields.get(staticName);
    commonField.applyRanges(
      commonField.ranges.map((item, index, list) =>
        index === list.length - 1 ? item.hi + 1 : item.hi,
      ),
    );
  }
  return indexedFields;
}

import { Index } from '@/ast/entity';
import { CommentedNode } from '@/ast/entity/commented-node';
import { CommonField } from '@/ast/entity/common-field';
import { Constraint } from '@/ast/entity/constraint';
import { Field } from '@/ast/entity/field';
import { ForeignKey } from '@/ast/entity/foreign-key';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { UniqueKey } from '@/ast/entity/unique-key';
import { Configuration } from '@/util/configuration';
import { normalize } from '@/util/normalize';
import { despluralize } from '@/util/plural';
import { makeIndexedFields } from '@/util/uniform';

export class Table extends CommentedNode {
  public fields: Field[];
  public descriptor?: Field | null;
  public constraints: Constraint[];
  public indexedFields: Map<string, CommonField>;
  public indexes: Index[];
  private normalizedName?: string;
  private normalizedDefault?: string;
  private normalizedAndDespluralizedName?: string;

  constructor(name: string) {
    super(name);
    this.fields = [];
    this.constraints = [];
    this.indexes = [];
    this.indexedFields = new Map();
  }

  prepare(): void {
    super.prepare();
    this.indexedFields = makeIndexedFields(this);
  }

  public getFields() {
    return this.fields;
  }

  public addField(field: Field) {
    this.fields.push(field);
    field.prepare();
  }

  public addConstraint(constraint: Constraint) {
    if (constraint instanceof PrimaryKey) this.constraints.unshift(constraint);
    else this.constraints.push(constraint);
  }

  public getIndexes() {
    return this.indexes;
  }

  public getNormalizedName(config: Configuration) {
    if (this.normalizedName) {
      return this.normalizedName;
    }
    const name = normalize(this.getName(), config.getDictionary());
    const parts = name.split('.');
    this.normalizedName = parts[parts.length - 1];
    return this.normalizedName;
  }

  public getNormalizedDefault() {
    if (this.normalizedDefault) {
      return this.normalizedDefault;
    }
    const name = normalize(this.getName());
    const parts = name.split('.');
    this.normalizedDefault = parts[parts.length - 1];
    return this.normalizedDefault;
  }

  public getNormalizedAndDespluralizedName(config: Configuration) {
    if (this.normalizedAndDespluralizedName) {
      return this.normalizedAndDespluralizedName;
    }
    this.normalizedAndDespluralizedName = despluralize(
      this.getNormalizedName(config),
      config.getDictionary(),
    );
    return this.normalizedAndDespluralizedName;
  }

  public addIndex(index: Index) {
    this.indexes.push(index);
  }

  public find(name: string): Field | null {
    const nameLC = name.toLocaleLowerCase();
    for (const field of this.fields) {
      if (field.name.toLocaleLowerCase() === nameLC) return field;
    }
    return null;
  }

  public findForeignKey(fieldName: string): ForeignKey | null {
    for (const constraint of this.constraints) {
      if (constraint instanceof ForeignKey) {
        const foreign = constraint as ForeignKey;
        if (foreign.exists(fieldName)) return foreign;
      }
    }
    return null;
  }

  public getReference(fieldName: string): string | null {
    const foreign = this.findForeignKey(fieldName);
    return foreign?.getTableName() || null;
  }

  public findIndex(field: Field): Index | null {
    const fieldNameLC = field.name.toLocaleLowerCase();
    for (const index of this.indexes) {
      for (const oField of index.getFields()) {
        if (oField.getName().toLocaleLowerCase() === fieldNameLC) return index;
      }
    }
    return null;
  }

  public findConstraint(fieldName: string) {
    const fieldNameLC = fieldName.toLocaleLowerCase();
    for (const constraint of this.constraints) {
      for (const oField of constraint.getFields()) {
        if (oField.getName().toLocaleLowerCase() === fieldNameLC)
          return constraint;
      }
    }
    return null;
  }

  public getConstraintFields(constraint?: Constraint): Field[] {
    const list: Field[] = [];
    if (!constraint) {
      return list;
    }
    for (const orderField of constraint.getFields()) {
      const field = this.find(orderField.getName());
      if (!field) {
        throw new Error(
          `Field ${orderField.getName()} not found in table ${this.getName()}`,
        );
      }
      list.push(field);
    }
    return list;
  }

  public getUniqueKeys(skipPk?: boolean): UniqueKey[] {
    const list: UniqueKey[] = [];
    for (const constraint of this.constraints) {
      if (!(constraint instanceof UniqueKey)) {
        continue;
      }
      if (skipPk && constraint instanceof PrimaryKey) {
        continue;
      }
      list.push(constraint);
    }
    return list;
  }

  public getUniqueIndex(field: Field): Index | null {
    const fieldNameLC = field.name.toLocaleLowerCase();
    for (const constraint of this.constraints) {
      if (!(constraint instanceof UniqueKey)) {
        continue;
      }
      for (const oField of constraint.getFields()) {
        if (oField.getName().toLocaleLowerCase() === fieldNameLC) {
          return constraint;
        }
      }
    }
    return null;
  }

  public isUnique(field: Field): boolean {
    return !!this.getUniqueIndex(field);
  }

  public getForeignKeys(tableName?: string): ForeignKey[] {
    const tableNameLC = tableName?.toLocaleLowerCase();
    const list: ForeignKey[] = [];
    for (const constraint of this.constraints) {
      if (!(constraint instanceof ForeignKey)) {
        continue;
      }
      if (
        tableNameLC &&
        constraint.getTableName().toLocaleLowerCase() !== tableNameLC
      ) {
        continue;
      }
      list.push(constraint);
    }
    return list;
  }

  public getPrimaryKey(): PrimaryKey | null {
    for (const constraint of this.constraints) {
      if (!(constraint instanceof PrimaryKey)) {
        continue;
      }
      return constraint;
    }
    return null;
  }

  public isPrimaryKeyField(field: Field): boolean {
    const primaryKey = this.getPrimaryKey();
    if (primaryKey == null) return false;
    return primaryKey.exists(field.name);
  }

  public getPrimary(): Field | null {
    const constraint = this.getPrimaryKey();
    if (constraint != null && constraint.getFields().length == 1)
      return this.find(constraint.getFields()[0].getName());
    return null;
  }

  public getDescriptor(): Field | null {
    if (this.descriptor !== undefined) {
      return this.descriptor;
    }
    this.descriptor = this.getInternalDescriptor() || null;
    return this.descriptor;
  }

  private getInternalDescriptor(): Field | undefined {
    let descField: Field;
    for (const field of this.getFields()) {
      if (field.isDescriptor()) {
        return field;
      }
      if (
        field.is(Field.Attribute.DESCRIPTOR) &&
        (field.getType().isString() || !descField)
      ) {
        descField = field;
      }
    }
    if (descField) {
      return descField;
    }
    for (const constraint of this.constraints) {
      if (constraint instanceof UniqueKey) {
        if (constraint.getFields().length == 1) {
          const field = this.find(constraint.getFields()[0].getName());
          if (field.getType().isString()) {
            return field;
          }
        }
      }
    }
    for (const field of this.getFields()) {
      if (field.getType().isString()) {
        return field;
      }
    }
    return this.getPrimary();
  }

  public getImage(): Field | null {
    for (const field of this.getFields()) {
      if (field.is(Field.Attribute.IMAGE)) {
        return field;
      }
    }
    return null;
  }
}

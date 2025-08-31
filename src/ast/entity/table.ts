import { Index } from '@/ast/entity';
import { CommentedNode } from '@/ast/entity/commented-node';
import { Constraint } from '@/ast/entity/constraint';
import { Field } from '@/ast/entity/field';
import { ForeignKey } from '@/ast/entity/foreign-key';
import { PrimaryKey } from '@/ast/entity/primary-key';
import { UniqueKey } from '@/ast/entity/unique-key';
import { Configuration } from '@/util/configuration';
import { normalize } from '@/util/normalize';
import { despluralize } from '@/util/plural';

export class Table extends CommentedNode {
  private fields: Field[];
  private constraints: Constraint[];
  private indexes: Index[];
  private normalizedName?: string;
  private normalizedDefault?: string;
  private normalizedAndDespluralizedName?: string;

  constructor(name: string) {
    super(name);
    this.fields = [];
    this.constraints = [];
    this.indexes = [];
  }

  public getFields() {
    return this.fields;
  }

  public addField(field: Field) {
    this.fields.push(field);
    field.prepare();
  }

  public getConstraints() {
    return this.constraints;
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
      if (field.getName().toLocaleLowerCase() === nameLC) return field;
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

  public isUnique(field: Field): boolean {
    return this.getUniqueIndex(field) != null;
  }

  public getUniqueIndex(field: Field): Index | null {
    const fieldNameLC = field.getName().toLocaleLowerCase();
    for (const constraint of this.constraints) {
      if (!(constraint instanceof UniqueKey)) continue;
      for (const oField of constraint.getFields()) {
        if (oField.getName().toLocaleLowerCase() === fieldNameLC)
          return constraint;
      }
    }
    return null;
  }

  public findIndex(field: Field): Index | null {
    const fieldNameLC = field.getName().toLocaleLowerCase();
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

  public getUniqueIndexCount() {
    let count = 0;
    for (const constraint of this.constraints) {
      if (constraint instanceof PrimaryKey) {
        continue;
      }
      if (constraint instanceof UniqueKey) {
        count++;
      }
    }
    return count;
  }

  public getConstraintFields(constraint?: Constraint): Field[] {
    const list: Field[] = [];
    if (!constraint) return list;
    for (const orderField of constraint.getFields()) {
      const field = this.find(orderField.getName());
      if (!field) throw new Error(`${orderField.getName()} ${this.getName()}`);
      list.push(field);
    }
    return list;
  }

  public getUniqueKeys(skipPk?: boolean): UniqueKey[] {
    const list: UniqueKey[] = [];
    for (const constraint of this.getConstraints()) {
      if (!(constraint instanceof UniqueKey)) continue;
      if (skipPk && constraint instanceof PrimaryKey) continue;
      list.push(constraint);
    }
    return list;
  }

  public getForeignKeys(): ForeignKey[] {
    const list: ForeignKey[] = [];
    for (const constraint of this.getConstraints()) {
      if (!(constraint instanceof ForeignKey)) continue;
      list.push(constraint);
    }
    return list;
  }

  public getPrimaryKey(): PrimaryKey | null {
    for (const constraint of this.getConstraints()) {
      if (!(constraint instanceof PrimaryKey)) continue;
      return constraint;
    }
    return null;
  }

  public isPrimaryKeyField(field: Field): boolean {
    const primaryKey = this.getPrimaryKey();
    if (primaryKey == null) return false;
    return primaryKey.exists(field.getName());
  }

  public getPrimary(): Field | null {
    const constraint = this.getPrimaryKey();
    if (constraint != null && constraint.getFields().length == 1)
      return this.find(constraint.getFields()[0].getName());
    return null;
  }

  public getDescriptor(): Field | null {
    let descField: Field | null = null;
    for (const field of this.getFields()) {
      if (field.is(Field.Attribute.DESCRIPTOR)) {
        if (field.getType().isString() || descField == null) {
          descField = field;
        }
        if (!field.getAttribute(Field.Attribute.DESCRIPTOR)) {
          return field;
        }
      }
    }
    if (descField != null) return descField;
    for (const constraint of this.getConstraints()) {
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

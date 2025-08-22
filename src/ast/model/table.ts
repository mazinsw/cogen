import { CommentedNode } from '@/ast/model/commented-node';
import { Constraint } from '@/ast/model/constraint';
import { Field } from '@/ast/model/field';
import { ForeignKey } from '@/ast/model/foreign-key';
import { Index } from '@/ast/model';
import { PrimaryKey } from '@/ast/model/primary-key';
import { UniqueKey } from '@/ast/model/unique-key';

export class Table extends CommentedNode {
  private fields: Field[];
  private constraints: Constraint[];
  private indexes: Index[];

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
}

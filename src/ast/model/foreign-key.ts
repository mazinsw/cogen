import { Constraint } from '@/ast/model/constraint';
import { Index } from '@/ast/model';

export class ForeignKey extends Constraint {
  public static NO_ACTION = 0;
  public static RESTRICT = 1;
  public static CASCADE = 2;
  public static SET_NULL = 3;

  private references: Index;

  private updateAction: number;
  private deleteAction: number;

  constructor(private tableName: string) {
    super();
    this.references = new Index();
  }

  public getTableName() {
    return this.tableName;
  }

  public setTableName(tableName: string) {
    this.tableName = tableName;
  }

  public getReferences() {
    return this.references;
  }

  public getUpdateAction() {
    return this.updateAction;
  }

  public setUpdateAction(updateAction: number) {
    this.updateAction = updateAction;
  }

  public setUpdateActionFromString(action: string) {
    switch (action) {
      case 'CASCADE':
        this.updateAction = ForeignKey.CASCADE;
        break;
      case 'RESTRICT':
        this.updateAction = ForeignKey.RESTRICT;
        break;
      default:
        if (action.includes('SET') && action.includes('NULL')) {
          this.updateAction = ForeignKey.SET_NULL;
        } else {
          this.updateAction = ForeignKey.NO_ACTION;
        }
        break;
    }
  }

  public getDeleteAction() {
    return this.deleteAction;
  }

  public setDeleteAction(deleteAction: number) {
    this.deleteAction = deleteAction;
  }

  public setDeleteActionFromString(action: string) {
    switch (action) {
      case 'CASCADE':
        this.deleteAction = ForeignKey.CASCADE;
        break;
      case 'RESTRICT':
        this.deleteAction = ForeignKey.RESTRICT;
        break;
      default:
        if (action.includes('SET') && action.includes('NULL')) {
          this.deleteAction = ForeignKey.SET_NULL;
        } else {
          this.deleteAction = ForeignKey.NO_ACTION;
        }
    }
  }

  public getDeleteActionText(): string {
    switch (this.deleteAction) {
      case ForeignKey.CASCADE:
        return 'CASCADE';
      case ForeignKey.RESTRICT:
        return 'RESTRICT';
      case ForeignKey.SET_NULL:
        return 'SET NULL';

      default:
        return 'NO ACTION';
    }
  }

  public getUpdateActionText(): string {
    switch (this.updateAction) {
      case ForeignKey.CASCADE:
        return 'CASCADE';
      case ForeignKey.RESTRICT:
        return 'RESTRICT';
      case ForeignKey.SET_NULL:
        return 'SET NULL';

      default:
        return 'NO ACTION';
    }
  }
}

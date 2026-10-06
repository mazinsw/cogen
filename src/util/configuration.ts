import { Properties } from '@/util/properties';
import * as path from 'path';

export class Configuration {
  public legacy: boolean;
  private lang: string;
  private projectFile: string;
  private inputFile: string;
  private outputPath: string;
  private upperWords: string;
  private templatePath: string;
  private dictionary: string[];
  /** lowercase table names to generate, empty means all tables */
  private filterTables: string[] = [];
  /** lowercase table names to skip on generation */
  private excludeTables: string[] = [];

  constructor() {
    this.setProjectFile('config.properties');
    this.setTemplatePath('scripts/template/');
    this.setOutputPath('storage/generated/');
    this.setLang(DEFAULT_LANG);
  }

  public getProjectFile() {
    return this.projectFile;
  }

  public setProjectFile(projectFile: string) {
    this.projectFile = projectFile;
    return this;
  }

  public getInputFile() {
    return this.inputFile;
  }

  public setInputFile(inputFile: string) {
    this.inputFile = inputFile;
    return this;
  }

  public getOutputPath() {
    return this.outputPath;
  }

  public setOutputPath(outputPath: string) {
    this.outputPath = outputPath;
    return this;
  }

  public setTemplatePath(templatePath: string) {
    this.templatePath = templatePath;
    return this;
  }

  public getTemplatePath() {
    return this.templatePath;
  }

  public getUpperWords() {
    return this.upperWords;
  }

  public setUpperWords(upperWords: string) {
    this.upperWords = upperWords;
    return this;
  }

  public getLang() {
    return this.lang;
  }

  /** set the language and its default despluralization rules */
  public setLang(lang: string) {
    this.lang = lang;
    this.setDictionary(defaultDictionary(lang));
    return this;
  }

  public getDictionary() {
    return this.dictionary;
  }

  public setDictionary(dictionary: string) {
    this.dictionary = dictionary.split(';');
    return this;
  }

  public getFilterTables() {
    return this.filterTables;
  }

  /** append comma separated table names to generate */
  public setFilterTables(tables: string) {
    this.filterTables.push(...parseTableList(tables));
    return this;
  }

  public getExcludeTables() {
    return this.excludeTables;
  }

  /** append comma separated table names to skip */
  public setExcludeTables(tables: string) {
    this.excludeTables.push(...parseTableList(tables));
    return this;
  }

  /** check whether the table must be generated, exclude wins over filter */
  public acceptsTable(tableName: string): boolean {
    const name = (tableName || '').toLowerCase();
    if (this.filterTables.length > 0 && !this.filterTables.includes(name)) {
      return false;
    }
    return !this.excludeTables.includes(name);
  }

  public rebasePath(filePath: string): string {
    return path
      .resolve(filePath)
      .replace(
        path.resolve(this.getTemplatePath()),
        path.resolve(this.getOutputPath()),
      );
  }

  public async load() {
    const props = new Properties(this.projectFile);
    await props.load();

    if (props.has('file')) this.inputFile = props.get('file');
    if (props.has('inputFile')) this.inputFile = props.get('inputFile');
    if (props.has('path')) this.outputPath = props.get('path');
    if (props.has('outputPath')) this.outputPath = props.get('outputPath');
    if (props.has('templatePath'))
      this.templatePath = props.get('templatePath');
    if (props.has('lang')) this.setLang(props.get('lang'));
    if (props.has('dict.' + this.lang))
      this.setDictionary(props.get('dict.' + this.lang));
    if (props.has('upperWords')) this.setUpperWords(props.get('upperWords'));
    if (props.has('legacy')) this.legacy = props.get('legacy') === 'true';
    if (props.has('filter')) this.setFilterTables(props.get('filter'));
    if (props.has('exclude')) this.setExcludeTables(props.get('exclude'));
  }

  public async save() {
    const props = new Properties(this.projectFile || 'e2t.properties');
    props.set('inputFile', this.inputFile);
    props.set('outputPath', this.outputPath);
    props.set('templatePath', this.templatePath);
    props.set('upperWords', this.getUpperWords());
    props.set('lang', this.lang);
    props.set('dict.' + this.lang, this.dictionary.join(';'));
    if (this.legacy) props.set('legacy', 'true');
    if (this.filterTables.length > 0)
      props.set('filter', this.filterTables.join(','));
    if (this.excludeTables.length > 0)
      props.set('exclude', this.excludeTables.join(','));
    await props.save();
  }
}

const DEFAULT_LANG = 'pt-BR';

export function isEnglish(lang?: string): boolean {
  return /^en(-|$)/i.test(lang || '');
}

function defaultDictionary(lang: string): string {
  return isEnglish(lang)
    ? 'ies/3/y;s/1/'
    : 'oes|aes/3/ao;is/2/l/4;res|ses/2/;es|as|os|ds/1/;ns/2/m';
}

function parseTableList(tables: string): string[] {
  return (tables || '')
    .split(',')
    .map((name) => name.trim().toLowerCase())
    .filter((name) => name.length > 0);
}

import { Properties } from '@/util/properties';

export class Configuration {
  private lang: string;
  private projectFile: string;
  private inputFile: string;
  private outputPath: string;
  private upperWords: string;
  private templatePath: string;
  private dictionary: string[];

  public Configuration() {
    this.setProjectFile('config.properties');
    this.setTemplatePath('template/');
    this.setDictionary('');
  }

  public getProjectFile() {
    return this.projectFile;
  }

  public setProjectFile(projectFile: string) {
    this.projectFile = projectFile;
  }

  public getInputFile() {
    return this.inputFile;
  }

  public setInputFile(inputFile: string) {
    this.inputFile = inputFile;
  }

  public getOutputPath() {
    return this.outputPath;
  }

  public setOutputPath(outputPath: string) {
    this.outputPath = outputPath;
  }

  public setTemplatePath(templatePath: string) {
    this.templatePath = templatePath;
  }

  public getTemplatePath() {
    return this.templatePath;
  }

  public getUpperWords() {
    return this.upperWords;
  }

  public setUpperWords(upperWords: string) {
    this.upperWords = upperWords;
  }

  public getLang() {
    return this.lang;
  }

  public setLang(lang: string) {
    this.lang = lang;
  }

  public getDictionary() {
    return this.dictionary;
  }

  public getDictionaryList() {
    return this.dictionary;
  }

  public setDictionary(dictionary: string) {
    this.dictionary = dictionary.split(';');
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
    this.lang = props.get('lang', 'pt-BR');
    let defaultDict = 'oes|aes/3/ao;is/2/l/4;res|ses/2/;es|as|os|ds/1/;ns/2/m';
    if (['en', 'en-us'].includes(this.lang.toLocaleLowerCase())) {
      defaultDict = 'ies/3/y;s/1/';
    }
    this.setDictionary(props.get('dict.' + this.lang, defaultDict));
    this.setUpperWords(props.get('upperWords'));
  }

  public async save() {
    const props = new Properties(this.projectFile || 'config.properties');
    props.set('inputFile', this.inputFile);
    props.set('outputPath', this.outputPath);
    props.set('templatePath', this.templatePath);
    props.set('upperWords', this.getUpperWords());
    await props.save();
  }
}

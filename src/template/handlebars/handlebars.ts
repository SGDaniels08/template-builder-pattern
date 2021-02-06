import fs from 'fs';
import * as hbs from 'handlebars';
import { ITemplateBuilder } from '../template';

export class Handlebars implements ITemplateBuilder<Function> {
  constructor() {
    this.registerHelpers();
  }

  private registerHelpers(): void {
    hbs.registerHelper('log', (msg: any) => console.log(msg));
  }

  private getFullPath(templatePath: string): string {
    if (!fs.existsSync(templatePath)) {
      throw new Error(`template path does not exist: "${templatePath}"`);
    }

    return templatePath;
  }

  private readTemplate(templatePath: string): string {
    return fs.readFileSync(this.getFullPath(templatePath)).toString('utf-8');
  }

  compile(templatePath: string): Function {
    return hbs.compile(this.readTemplate(templatePath));
  }
}

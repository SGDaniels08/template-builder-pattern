import { Handlebars } from './handlebars/handlebars';
import { ITemplateBuilder, TemplateBuilder } from './template';

export class HTMLTemplateBuilder extends TemplateBuilder {
  constructor(builder: ITemplateBuilder<Function> = new Handlebars()) {
    super(builder);
  }

  toHTML() {
    return this.compile();
  }
}

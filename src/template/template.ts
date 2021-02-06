export interface ITemplateBuilder<T> {
  compile(x?: any): T;
}

export class TemplateBuilder implements ITemplateBuilder<string> {
  private templateFn!: Function;
  private context: Object = {};

  constructor(private builder: ITemplateBuilder<Function>) {}

  use(template: string) {
    this.templateFn = this.builder.compile(template);

    return this;
  }

  private prepare(context: Object): Object {
    return context;
  }

  with<T>(context: T) {
    this.context = this.prepare(context);

    return this;
  }

  compile(): string {
    return this.templateFn(this.context);
  }
}

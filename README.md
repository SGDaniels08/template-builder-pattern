# template-builder-pattern

Trying out the builder pattern with a templates.  Nothing fancy (no webpack or live reloading).

Example usage:

```TypeScript
const html = new HTMLBuilder()
  .use('static/index.hbs')
  .with({ greeting: 'Hello, World'})
  .toHTML();
```

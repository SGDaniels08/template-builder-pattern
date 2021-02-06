import express from 'express';
import path from 'path';
import { HTMLTemplateBuilder } from './template/html-template';

export const server = express();

server.get('/', (req, resp) => {
  resp
    .contentType('.html')
    .send(
      new HTMLTemplateBuilder()
        .use(path.resolve(__dirname, 'static/index.hbs'))
        .with({ name: 'World' })
        .toHTML()
    );
});

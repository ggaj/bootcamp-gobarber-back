import express from 'express';
import routes from './routes';

import './database';
import {resolve} from 'path';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use('/files', express.static(resolve('..', 'temp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

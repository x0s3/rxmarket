import { createContext } from '@marblejs/core';
import httpListener from './app';
import { Server, Database } from './connection';

const bootstrap = async () => {
  // await Database.connect();
  await Server.create(httpListener.run(createContext()));
};

bootstrap();

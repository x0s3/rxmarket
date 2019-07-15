import { createContext } from '@marblejs/core';
import httpListener from './app';
import { Server } from './connection/server';

const bootstrap = async () => {
  await Server.create(httpListener.run(createContext()));
};

bootstrap();

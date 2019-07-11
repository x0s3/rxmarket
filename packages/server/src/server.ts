import { createContext } from '@marblejs/core';
import { Server } from './connection/server';
import httpListener from './http.listener';

const bootstrap = async () => {
  await Server.create(httpListener.run(createContext()));
};

bootstrap();

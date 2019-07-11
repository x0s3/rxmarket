import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from './api.effects';

const middlewares = [logger$(), bodyParser$()];

const effects = [api$];

export default httpListener({ middlewares, effects });

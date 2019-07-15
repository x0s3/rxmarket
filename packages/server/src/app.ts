import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$ } from './api';
import { cors$, logger$ } from './api/common';

const middlewares = [cors$, logger$, bodyParser$()];

const effects = [api$];

export default httpListener({ middlewares, effects });

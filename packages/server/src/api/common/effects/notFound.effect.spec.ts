import { createContext } from '@marblejs/core';
import * as request from 'supertest';
import httpListener from '../../../http.listener';

describe('notFoundEffect$', () => {
  const app = httpListener.run(createContext());

  test('GET api/v1/undefined responds with 400', async () =>
    request(app)
      .get('/api/v1/undefined')
      .expect(404, { error: { status: 404, message: 'Route not found' } }));
});

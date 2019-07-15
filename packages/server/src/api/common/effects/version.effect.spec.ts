import { createContext } from '@marblejs/core';
import * as request from 'supertest';
import httpListener from '../../../app';

describe('versionEffect$', () => {
  const app = httpListener.run(createContext());

  test('GET api/v1 responds with 200', async () =>
    request(app)
      .get('/api/v1')
      .expect(200, '"API version: v1"'));
});

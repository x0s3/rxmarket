import { of, throwError } from 'rxjs';
import { UsersDao } from '../../users';
import { Payload } from '../helpers';
import { verifyPayload$ } from './auth.middleware';

describe('Auth middleware', () => {
  test('#verifyPayload$ checks if user exists in DB', done => {
    // given
    const payload: Payload = { _id: 'test_id', email: 'test_email', exp: 123 };

    // when
    spyOn(UsersDao, 'findById').and.callFake(() => of('test_data'));
    const result$ = verifyPayload$(payload);

    // then
    return result$.subscribe(
      data => {
        expect(data).toBeDefined();
        done();
      },
      () => {
        fail("Stream shouldn't return an error");
        done();
      }
    );
  });

  test('#verifyPayload$ throws an error if user does not exists in DB', done => {
    // given
    const payload: Payload = { _id: 'test_id', email: 'test_email', exp: 123 };

    // when
    spyOn(UsersDao, 'findById').and.callFake(() => throwError(new Error()));
    const result$ = verifyPayload$(payload);

    // then
    return result$.subscribe(
      () => {
        fail('Stream should return an error');
        done();
      },
      err => {
        expect(err).toBeDefined();
        done();
      }
    );
  });
});

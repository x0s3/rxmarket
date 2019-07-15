import { authorize$ as jwt$, VerifyOptions } from '@marblejs/middleware-jwt';
import { flatMap } from 'rxjs/operators';
import { Config } from '../../../config';
import { neverNullable } from '../../../util';
import { UsersDao } from '../../users';
import { Payload } from '../helpers';

const jwtConfig: VerifyOptions = { secret: Config.jwt.secret };

export const verifyPayload$ = (payload: Payload) =>
  UsersDao.findById(payload._id).pipe(flatMap(neverNullable));

export const authorize$ = jwt$(jwtConfig, verifyPayload$);

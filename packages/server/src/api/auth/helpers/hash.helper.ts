import { compare as compareHash, hash as hashPass } from 'bcrypt';
import { from, Observable } from 'rxjs';

const createHash = (password: string): Promise<string> =>
  hashPass(password, 10);

export const createHash$ = (password: string) => from(createHash(password));

const compare = (password: string, hash: string): Promise<boolean> =>
  compareHash(password, hash);

export const compare$ = (password: string, hash: string): Observable<boolean> =>
  from(compare(password, hash));

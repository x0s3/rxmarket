import { Database } from '../connection';
import { usersGenerator } from './users.generator';

const REGISTERED_GENERATORS = [usersGenerator];

const seed = async () => {
  await Database.connect();
  await Database.drop();
  await Promise.all(REGISTERED_GENERATORS.map(generate => generate()));
  await Database.disconnect();
};

seed();

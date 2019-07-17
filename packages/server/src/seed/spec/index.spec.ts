import { Database } from '../../connection';

let usersGeneratorModule;

beforeEach(() => {
  jest.unmock('../users.generator');
  usersGeneratorModule = require('../users.generator');
  usersGeneratorModule.usersGenerator = jest.fn();
});

test('#seed seeds database with registered generators', done => {
  // when
  spyOn(Database, 'connect').and.callFake(() => Promise.resolve());
  spyOn(Database, 'drop').and.callFake(() => Promise.resolve());
  spyOn(Database, 'disconnect').and.callFake(() => Promise.resolve());

  require('../index');

  // then
  process.nextTick(() => {
    expect(Database.connect).toHaveBeenCalled();
    expect(Database.drop).toHaveBeenCalled();
    expect(usersGeneratorModule.usersGenerator).toHaveBeenCalled();
    expect(Database.disconnect).toHaveBeenCalled();
    done();
  });
});

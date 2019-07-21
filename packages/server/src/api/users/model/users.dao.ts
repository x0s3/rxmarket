import { from } from 'rxjs';
import { LoginCredentials } from '../../auth';
import { User, USER_PUBLIC_FIELDS, USER_SECURE_FIELDS } from './users.model';

export namespace UsersDao {
  export const model = new User().getModelForClass(User);

  export const findByCredentials = (credentials: LoginCredentials) =>
    from(
      model
        .findOne({
          email: credentials.email,
          password: credentials.password
        })
        .populate('restaurants', 'name')
        .select(USER_SECURE_FIELDS)
        .exec()
    );

  export const findById = (id: string) =>
    from(
      model
        .findById(id)
        .populate('restaurants', 'name')
        .select(USER_SECURE_FIELDS)
        .exec()
    );

  export const findByIdPublic = (id: string) =>
    from(
      model
        .findById(id)
        .populate('restaurants', 'name')
        .select(USER_PUBLIC_FIELDS)
        .exec()
    );

  export const findAll = () =>
    from(
      model
        .find()
        .populate('restaurants', 'name')
        .select(USER_SECURE_FIELDS)
        .exec()
    );

  export const findAllPublic = () =>
    from(
      model
        .find()
        .populate('restaurants', 'name')
        .select(USER_PUBLIC_FIELDS)
        .exec()
    );
}

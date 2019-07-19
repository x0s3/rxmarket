import { arrayProp, prop, Ref, Typegoose } from 'typegoose';
import { Restaurant } from '../../restaurants';

export enum UserRole {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN'
}

export class User extends Typegoose {
  @prop({ required: true })
  firstName?: string;

  @prop({ required: true })
  lastName?: string;

  @prop({ required: true })
  email?: string;

  @prop({ required: true })
  password?: string;

  @prop({ required: true })
  phone?: string;

  @arrayProp({ items: String, enum: UserRole })
  roles?: UserRole[];

  @arrayProp({ itemsRef: Restaurant })
  restaurants?: Array<Ref<Restaurant>>;
}

export const USER_SECURE_FIELDS = {
  password: 0
};

export const USER_PUBLIC_FIELDS = {
  ...USER_SECURE_FIELDS,
  email: 0,
  roles: 0
};

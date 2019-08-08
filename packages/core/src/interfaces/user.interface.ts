import { IRestaurant } from './';

export interface IUser {
  readonly id?: number;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly phone?: string;
  readonly roles?: UserRole[];
  readonly created_at?: Date;
  readonly credit_card_number?: string;
  readonly credit_card_expire_date?: string;
  readonly restaurants?: IRestaurant[];
}

export enum UserRole {
  USER = 'user',
  RIDER = 'rider',
  ADMIN = 'admin'
}

export enum VehicleType {
  MOTO = 'moto',
  CAR = 'car',
  BICYCLE = 'bicycle'
}

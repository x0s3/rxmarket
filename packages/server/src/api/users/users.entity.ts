import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Restaurant } from '../restaurants/restaurants.entity';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  email?: string;

  @Column({ select: false })
  password?: string;

  @Column()
  phone?: string;

  @Column({ select: false, nullable: true })
  // tslint:disable-next-line: variable-name
  credit_card_number?: string;

  @Column({ select: false, nullable: true })
  // tslint:disable-next-line: variable-name
  credit_card_expire_date?: string;

  @Column('simple-array', { array: true, default: [UserRole.USER] })
  roles?: UserRole[];

  @Column('timestamp with time zone', {
    select: false,
    default: () => 'CURRENT_TIMESTAMP'
  })
  // tslint:disable-next-line: variable-name
  created_at?: Date;

  @ManyToMany(type => Restaurant, {
    cascade: true
  })
  @JoinTable()
  restaurants?: Restaurant[];
}

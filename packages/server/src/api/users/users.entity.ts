import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Restaurant } from '../restaurants/restaurants.entity';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

@Entity('users')
export class User {
  @ObjectIdColumn()
  id?: ObjectID;

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

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  roles?: UserRole[];

  @Column(type => Restaurant)
  restaurants?: Restaurant[];
}

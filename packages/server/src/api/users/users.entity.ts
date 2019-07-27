import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ type: 'text', default: UserRole.USER })
  roles?: UserRole[];

  @OneToMany(type => Restaurant, restaurant => restaurant.id, {
    primary: true,
    nullable: false
  })
  restaurants?: Restaurant[];
}

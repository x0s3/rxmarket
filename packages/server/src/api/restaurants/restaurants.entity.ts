import { RestaurantCategory, RestaurantRole } from 'core/src/interfaces';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

@Entity('restaurants')
export class Restaurant {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  name?: string;

  @Column()
  phone?: string;

  @Column()
  email?: string;

  @Column({ default: 0 })
  rate?: number;

  @Column()
  description?: string;

  @Column()
  image?: string;

  @Column({ type: 'enum', enum: RestaurantRole })
  roles?: RestaurantRole[];

  @Column({ type: 'enum', enum: RestaurantCategory })
  categories?: RestaurantCategory[];
}

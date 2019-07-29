import {
  IRestaurant,
  RestaurantCategory,
  RestaurantRole
} from 'core/src/interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurants')
export class Restaurant implements IRestaurant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, length: 50 })
  name!: string;

  @Column({ nullable: false, length: 15 })
  phone?: string;

  @Column()
  email?: string;

  @Column({ default: 0 })
  rate!: number;

  @Column()
  description?: string;

  @Column()
  image?: string;

  @Column('simple-array', { array: true, default: () => 'array[]::text[]' })
  images?: string[];

  @Column('timestamp with time zone', { default: () => 'CURRENT_TIMESTAMP' })
  // tslint:disable-next-line: variable-name
  created_at?: Date;

  @Column('simple-array', { array: true, default: [RestaurantRole.LOCAL] })
  roles!: RestaurantRole[];

  @Column('simple-array', {
    array: true,
    default: [RestaurantCategory.HEALTHY]
  })
  categories?: RestaurantCategory[];
}

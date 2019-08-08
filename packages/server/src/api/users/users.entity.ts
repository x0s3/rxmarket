import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { User } from '../entities/userBase';
import { Restaurant } from '../restaurants/restaurants.entity';

@Entity('customer')
export class Customer extends User {
  @Column({ select: false, nullable: true })
  // tslint:disable-next-line: variable-name
  credit_card_number?: string;

  @Column({ select: false, nullable: true })
  // tslint:disable-next-line: variable-name
  credit_card_expire_date?: string;

  @ManyToMany(type => Restaurant, {
    cascade: true
  })
  @JoinTable()
  restaurants?: Restaurant[];
}

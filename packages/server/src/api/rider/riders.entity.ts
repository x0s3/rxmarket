import { VehicleType } from 'core/src/interfaces';
import { Column, Entity } from 'typeorm';
import { User } from '../entities/userBase';

@Entity('rider')
export class Rider extends User {
  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.BICYCLE })
  // tslint:disable-next-line: variable-name
  type_vehicle?: VehicleType;

  @Column({ default: 0 })
  rate?: number;
}

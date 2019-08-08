import { UserRole } from 'core/src/interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

  @Column('simple-array', { array: true, default: [UserRole.USER] })
  roles?: UserRole[];

  @Column('timestamp with time zone', {
    select: false,
    default: () => 'CURRENT_TIMESTAMP'
  })
  // tslint:disable-next-line: variable-name
  created_at?: Date;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Customer } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Customer)
    private readonly userRepository: Repository<Customer>
  ) {}

  findOne(email: string): Observable<Customer> {
    return from(
      this.userRepository.findOneOrFail({
        where: {
          email
        }
      })
    );
  }

  findAll(): Observable<Customer[]> {
    return from(
      this.userRepository.find({
        relations: ['restaurants']
      })
    );
  }
}

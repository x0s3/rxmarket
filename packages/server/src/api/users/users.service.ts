import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  findOne(email: string): Observable<User> {
    return from(
      this.userRepository.findOneOrFail({
        where: {
          email
        }
      })
    );
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }
}

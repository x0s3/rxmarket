import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Restaurant } from './restaurants.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>
  ) {}

  findAll({ take = 10, skip = 0 }): Observable<Restaurant[]> {
    return from(
      this.restaurantRepository.find({
        take,
        skip
      })
    );
  }

  findOneById(id: number): Observable<Restaurant> {
    return from(this.restaurantRepository.findOneOrFail({ id }));
  }
}

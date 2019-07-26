import { Controller, Get } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Restaurant } from './restaurants.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  findAll(): Observable<Restaurant[]> {
    return from(this.restaurantsService.findAll());
  }
}

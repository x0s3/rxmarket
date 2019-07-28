import { Controller, Get, Param } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Restaurant } from './restaurants.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get('/:id')
  findOne(@Param('id') id: number): Observable<Restaurant> {
    return from(this.restaurantsService.findOneById(id));
  }

  @Get()
  findAll(): Observable<Restaurant[]> {
    return from(this.restaurantsService.findAll());
  }
}

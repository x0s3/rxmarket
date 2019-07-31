import { Controller, Get, Param, Query } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Restaurant } from './restaurants.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  findAll(
    @Query('take') take: number,
    @Query('skip') skip: number
  ): Observable<Restaurant[]> {
    return from(this.restaurantsService.findAll({ take, skip }));
  }

  @Get('/:id')
  findOne(@Param('id') id: number): Observable<Restaurant> {
    return from(this.restaurantsService.findOneById(id));
  }

  @Get('/search')
  fidnByQuery(@Query('query') query: string): Observable<Restaurant[]> {
    return from(this.restaurantsService.findByQuery(query));
  }
}

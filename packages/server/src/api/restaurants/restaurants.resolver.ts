import { Query, Resolver } from '@nestjs/graphql';
import { from, Observable } from 'rxjs';
import { Restaurant } from './restaurants.entity';
import { RestaurantsService } from './restaurants.service';

@Resolver('Restaurant')
export class RestaurantsResolvers {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Query()
  getRestaurants(): Observable<Restaurant[]> {
    return from(this.restaurantsService.findAll({}));
  }
}

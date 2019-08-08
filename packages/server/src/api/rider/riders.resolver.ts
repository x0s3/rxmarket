import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { from, Observable } from 'rxjs';
import { Rider } from './riders.entity';
import { RidersService } from './riders.service';

@Resolver('Rider')
export class RidersResolvers {
  constructor(
    private readonly ridersService: RidersService,
    @Inject('PUB_SUB') private readonly pubSubService: PubSub
  ) {}

  @Query()
  getRiders(): Observable<Rider[]> {
    return from(this.ridersService.findAll({}));
  }

  @Mutation()
  updateGeoPosition(@Args('riderId') riderId: number): Observable<any> {
    return from(this.ridersService.updateGeoPosition(riderId));
  }

  @Subscription()
  getLiveDeliveries() {
    return this.pubSubService.asyncIterator('getLiveDeliveries');
  }
}

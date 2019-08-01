import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsController } from './restaurants.controller';
import { Restaurant } from './restaurants.entity';
import { RestaurantsResolvers } from './restaurants.resolver';
import { RestaurantsService } from './restaurants.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
  ],
  providers: [RestaurantsService, RestaurantsResolvers],
  controllers: [RestaurantsController]
})
export class RestaurantsModule {}

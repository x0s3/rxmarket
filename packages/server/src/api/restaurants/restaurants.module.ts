import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { RestaurantsController } from './restaurants.controller';
import { Restaurant } from './restaurants.entity';
import { RestaurantsResolvers } from './restaurants.resolver';
import { RestaurantsService } from './restaurants.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    forwardRef(() => AuthModule)
  ],
  providers: [RestaurantsService, RestaurantsResolvers],
  controllers: [RestaurantsController]
})
export class RestaurantsModule {}

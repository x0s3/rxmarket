import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './riders.entity';
import { RidersResolvers } from './riders.resolver';
import { RidersService } from './riders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rider])],
  providers: [RidersService, RidersResolvers]
})
export class RidersModule {}

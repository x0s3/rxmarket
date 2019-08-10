import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pubSubProvider } from '../../providers/pubSub';
import { AuthModule } from '../auth/auth.module';
import { Rider } from './riders.entity';
import { RidersResolvers } from './riders.resolver';
import { RidersService } from './riders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rider]), forwardRef(() => AuthModule)],
  providers: [RidersService, RidersResolvers, pubSubProvider]
})
export class RidersModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RestaurantsModule, UsersModule } from './api';
import { Config } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: Config.db.host,
      port: Config.db.port,
      username: Config.db.name,
      password: Config.db.password,
      database: Config.db.databaseName,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: false
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      debug: true
    }),
    // AuthModule,
    UsersModule,
    RestaurantsModule
  ]
})
export class AppModule {}

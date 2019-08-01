import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Config.server.port, '0.0.0.0');
}

bootstrap();

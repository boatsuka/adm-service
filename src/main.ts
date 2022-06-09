import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.port || 8080;
  await app.setGlobalPrefix('api/v1');
  await app.enableCors();
  await app.listen(port);
}
bootstrap();

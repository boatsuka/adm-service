import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api/v1');
  await app.enableCors();
  await app.listen(process.env.port || 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ApplicationModule } from './modules/app.modules';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(5000, () => {
    Logger.log('Application is listening on port 5000.');
  });
}
bootstrap();

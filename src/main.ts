import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as nunjucks from 'nunjucks';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { AppModule } from './app.module';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: '../',
  });
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  const environment = nunjucks.configure(
    [
      join(__dirname, '..', 'templates'),
      join(__dirname, '.', 'system_template'),
    ],
    {
      autoescape: true,
      throwOnUndefined: false,
      trimBlocks: false,
      lstripBlocks: false,
      watch: true,
      noCache: true,
      express: app,
    },
  );
  app.engine('njk', environment.render);
  app.setViewEngine('njk');
  app.set('view cache', true);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'templates'));

  await app.listen(3000);
}
bootstrap();

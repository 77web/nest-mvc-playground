import { Module } from '@nestjs/common';
import { HomeController } from './controller/home.controller';
import { AppService } from './service/app.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [AppService],
})
export class AppModule {}

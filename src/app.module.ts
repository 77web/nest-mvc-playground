import { Module } from '@nestjs/common';
import { HomeController } from './controller/home.controller';
import { AppService } from './service/app.service';
import { OrmModule } from './module/orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [HomeController],
  providers: [AppService],
})
export class AppModule {}

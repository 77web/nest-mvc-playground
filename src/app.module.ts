import { Module } from '@nestjs/common';
import { HomeController } from './controller/home.controller';
import { OrmModule } from './module/orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}

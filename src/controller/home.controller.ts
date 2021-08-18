import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class HomeController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home/index')
  getHello() {
    return { hello: this.appService.getHello() };
  }
}

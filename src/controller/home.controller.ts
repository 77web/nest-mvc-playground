import { Controller, Get, Render } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../entity/user';

@Controller()
export class HomeController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  @Render('home/index')
  async index() {
    const users = await this.em.find(User, {});
    if (users.length === 0) {
      return { hello: 'Hello Jane Doe!' };
    }

    return { hello: 'Hello ' + users[0].name };
  }
}

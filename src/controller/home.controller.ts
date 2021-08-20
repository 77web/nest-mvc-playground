import { Controller, Get, Render } from '@nestjs/common';
import { UserRepository } from '../repository/user-repository';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../entity/user';

@Controller()
export class HomeController {
  private readonly repository: UserRepository;
  constructor(em: EntityManager) {
    this.repository = em.getRepository(User);
  }

  @Get()
  @Render('home/index')
  async index() {
    const users = await this.repository.find({});
    if (users.length === 0) {
      return { hello: 'Hello Jane Doe!' };
    }

    return { hello: 'Hello ' + users[0].name };
  }
}

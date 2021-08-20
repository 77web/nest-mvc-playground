import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { OrmModule } from '../module/orm/orm.module';

describe('HomeController', () => {
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [OrmModule],
      controllers: [HomeController],
      providers: [],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await homeController.index()).toEqual({ hello: 'Hello Hiromi' });
    });
  });
});

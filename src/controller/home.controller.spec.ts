import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { AppService } from '../service/app.service';

describe('HomeController', () => {
  let homeController: HomeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [AppService],
    }).compile();

    homeController = app.get<HomeController>(HomeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(homeController.index()).toBe({ hello: 'Hello World!' });
    });
  });
});

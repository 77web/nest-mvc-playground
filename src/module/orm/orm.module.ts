import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../../entity/user';
import * as ormConfig from 'config/mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(ormConfig.default),
    MikroOrmModule.forFeature({
      entities: [User],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}

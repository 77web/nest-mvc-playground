import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { User } from '../src/entity/user';
import * as dotenv from 'dotenv';

dotenv.config();

const logger = new Logger('MikroORM');
const config = {
  entities: [User],
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  type: 'mysql',
  port: 3306,
  debug: true,
  logger: logger.log.bind(logger),
} as Options;

export default config;

import { EntityRepository } from '@mikro-orm/core';
import { User } from '../entity/user';

export class UserRepository extends EntityRepository<User> {}

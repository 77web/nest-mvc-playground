import { PrimaryKey, Property } from '@mikro-orm/core';

export class User {
  @PrimaryKey()
  id!: number;
  @Property()
  email: string;
  @Property()
  name: string;
}

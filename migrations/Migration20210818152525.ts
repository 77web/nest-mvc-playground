import { Migration } from '@mikro-orm/migrations';

export class Migration20210818152525 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `email` varchar(255) not null, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

}

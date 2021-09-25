import { Migration } from '@mikro-orm/migrations';

export class Migration20210925124911 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "_id" to "id";');


    this.addSql('alter table "user" drop column "name";');
    this.addSql('alter table "user" drop column "email";');
  }

}

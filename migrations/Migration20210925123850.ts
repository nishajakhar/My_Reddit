import { Migration } from '@mikro-orm/migrations';

export class Migration20210925123850 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "_id" to "id";');
  }

}

import { MikroORM } from '@mikro-orm/core';
import mikroORMConfig from '../mikro-orm.config';
import * as dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const orm = await MikroORM.init(mikroORMConfig);
  await orm.getMigrator().up();
};
main();

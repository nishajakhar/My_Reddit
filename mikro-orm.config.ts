import { MikroORM } from '@mikro-orm/core';
import path = require('path');
import { User } from './src/entities/User';
export default {
  migrations: {
    path: path.join(__dirname, '/migrations'), // path to folder with migration files
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User],
  dbName: process.env.MIKRO_ORM_DATABASE,
  user: process.env.MIKRO_ORM_USER,
  password: process.env.MIKRO_ORM_PASSWORD,
  type: process.env.MIKRO_ORM_TYPE,
  debug: false,
} as Parameters<typeof MikroORM.init>[0];

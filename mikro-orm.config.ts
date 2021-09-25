import { MikroORM } from '@mikro-orm/core';
import path = require('path');
import { User } from './src/entities/User';
import dotenv from 'dotenv';
import { Post } from './src/entities/Post';
dotenv.config();
export default {
  migrations: {
    path: path.join(__dirname, '/migrations'), // path to folder with migration files
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User, Post],
  dbName: process.env.MIKRO_ORM_DATABASE,
  user: process.env.MIKRO_ORM_USER,
  password: process.env.MIKRO_ORM_PASSWORD,
  type: process.env.MIKRO_ORM_TYPE,
  debug: false,
} as Parameters<typeof MikroORM.init>[0];

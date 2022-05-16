import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as config from 'config';

const db = config.get('db');

export const dbConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.KEEP_DB_HOST || db.host,
  port: process.env.KEEP_DB_PORT || db.port,
  username: process.env.KEEP_DB_USER || db.username,
  password: process.env.KEEP_DB_PASSWORD || db.password,
  database: process.env.KEEP_DB_NAME || db.database,
  models: [__dirname + '/**/*.entity.{js,ts}'],
  synchronize: false,
}

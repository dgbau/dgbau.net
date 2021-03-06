require('dotenv').config();

export interface PostgresConfig {
  connection: string;
}

export const config: PostgresConfig = {
  connection: process.env.DATABASE_URL || '',
};

if (!config.connection) {
  throw new Error('process.env.DATABASE_URL required');
}

import Knex from 'knex';
import { postgresConfig } from '../config';

export const create = async () => {
  const knex = Knex({
    client: 'pg',
    connection: {
      user: postgresConfig.connection,
    },
  });
};

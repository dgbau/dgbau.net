// require('./env')();
require('dotenv').config();
// import * as dotenv from 'dotenv';

import { app } from './app';
import { logger } from './components';

app.boot((error?: Error) => {
  if (error) {
    throw error;
  }

  // const server: ApolloServer = app.get('server');
  const port: number = app.get('port') || 3000;

  // server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 Server listening on ${port} ...`);
    // logger.info(`🚀 Server listening on ${port}${server.graphqlPath} ...`);
    logger.info(`🚀 Server listening on ${port} ...`, port);
  });
});

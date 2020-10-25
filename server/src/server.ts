import * as dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { logger } from './components';

app.boot((error?: Error) => {
  if (error) {
    throw error;
  }
  const port: string = process.env.PORT || '3001';

  app.listen(port, () => {
    logger.info(`🚀 Server listening on ${port}`);
  });
});

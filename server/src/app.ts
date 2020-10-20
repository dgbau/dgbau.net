import express, { Express } from 'express';
import { settings } from './config/settings';

const app: Express = express();

app.get('', (req, res) => {
  res.send('hello');
});

app.listen(settings.server.port, () => {
  console.log(`App listening on port ${settings.server.port}`);
});

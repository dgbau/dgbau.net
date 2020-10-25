import { Router } from 'express';

export const router: Router = Router();

router.get('/', (req, res) => {
  res.send('this is the root page');
});

router.get('/info', (req, res) => {
  res.send('this is the root info page');
});

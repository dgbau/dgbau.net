import { Router } from 'express';

export const router: Router = Router();

router.get('/', (req, res) => {
  res.send('this is the root projects page');
});

router.get('/recent', (req, res) => {
  res.send('this is the recent projects page');
});

router.get('/:id', (req, res) => {
  res.send('this is the page for project with id: ' + req.params.id);
});

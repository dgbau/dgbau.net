import { Router } from 'express';

export const router: Router = Router();

router.get('/', (req, res) => {
  res.send('this is the root images page');
});

router.get('/recent', (req, res) => {
  res.send('this is the recent images page');
});

router.get('/:id', (req, res) => {
  res.send('this is the page for image with id: ' + req.params.id);
});

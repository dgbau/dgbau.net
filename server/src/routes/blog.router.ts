import { Router } from 'express';

import * as blogControllers from '../controllers/blog';

export const router: Router = Router();

router.get('/', blogControllers.getAll);

router.get('/recent', (req, res) => {
  res.send('this is the recent blog posts page');
});

router.get('/:id', (req, res) => {
  res.send('this is the page for blog post with id: ' + req.params.id);
});

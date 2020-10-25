import { Router } from 'express';
import * as recipeController from '../controllers/recipes';

export const router: Router = Router();

router.get('/', recipeController.getAll);

router.get('/recent', (req, res) => {
  res.send('this is the recent recipes page');
});

router.get('/favorites', (req, res) => {
  res.send('this is the favorite recipes page');
});

router.get('/:id', (req, res) => {
  res.send('this is the page for recipe with id: ' + req.params.id);
});

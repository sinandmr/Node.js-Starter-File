import express from 'express';
import * as mainController from '../controllers/mainController.js';
const router = express.Router();

router.route('/:id').get(mainController.getURL);

router.route('/create').post(mainController.createUser);

router.route('/a').get((req, res) => {
  res.json({
    page: 'a',
    date: req.time,
  });
});
export default router;

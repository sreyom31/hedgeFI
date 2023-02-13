import { Router } from 'express';
import divestController from '../controllers/divest.controller';
import validate from '../middlewares/validation';
import { divestValidation } from '../validations';
const router = Router();

router
  .route('/')
  .post(
    // validate(divestValidation.createDivest),
    divestController.createDivest
  )
  .get(
    // validate(divestValidation.getDivests),
    divestController.getDivests
  );

router
  .route('/:divestId')
  .get(
    // validate(divestValidation.getDivest),
    divestController.getDivest
  )
  .patch(
    // validate(divestValidation.updateDivest),
    divestController.updateDivest
  )
  .delete(
    // validate(divestValidation.deleteDivest),
    divestController.deleteDivest
  );

export default router;

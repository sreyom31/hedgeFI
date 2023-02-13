import { Router } from 'express';
import accumulateController from '../controllers/accumulate.controller';
import validate from '../middlewares/validation';
import { accumulateValidation } from '../validations';
const router = Router();

router
  .route('/')
  .post(
    // validate(accumulateValidation.createAccumulate),
    accumulateController.createAccumulate
  )
  .get(
    // validate(accumulateValidation.getAccumulates),
    accumulateController.getAccumulates
  );

router
  .route('/:accumulateId')
  .get(
    // validate(accumulateValidation.getAccumulate),
    accumulateController.getAccumulate
  )
  .patch(
    // validate(accumulateValidation.updateAccumulate),
    accumulateController.updateAccumulate
  )
  .delete(
    // validate(accumulateValidation.deleteAccumulate),
    accumulateController.deleteAccumulate
  );

export default router;

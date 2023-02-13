import { Router } from 'express';
import investController from '../controllers/invest.controller';
import validate from '../middlewares/validation';
import { investValidation } from '../validations';
const router = Router();

router
  .route('/')
  .post(validate(investValidation.createInvest), investController.createInvest)
  .get(validate(investValidation.getInvests), investController.getInvests);

router
  .route('/:investId')
  .get(validate(investValidation.getInvest), investController.getInvest)
  .patch(validate(investValidation.updateInvest), investController.updateInvest)
  .delete(
    validate(investValidation.deleteInvest),
    investController.deleteInvest
  );

export default router;

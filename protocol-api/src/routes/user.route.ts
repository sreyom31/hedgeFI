import { Router } from 'express';
import claimController from '../controllers/claim.controller';
import validate from '../middlewares/validation';
import { claimValidation } from '../validations';
const router = Router();

router
  .route('/')
  .post(
    // validate(claimValidation.createClaim),
    claimController.createClaim
  )
  .get(
    // validate(claimValidation.getClaims),

    claimController.getClaims
  );

router
  .route('/:claimId')
  .get(
    // validate(claimValidation.getClaim),
    claimController.getClaim
  )
  .patch(
    // validate(claimValidation.updateClaim),
    claimController.updateClaim
  )
  .delete(
    // validate(claimValidation.deleteClaim),
    claimController.deleteClaim
  );

export default router;

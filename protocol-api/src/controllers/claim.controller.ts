import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { claimService } from '../services';

const createClaim = catchAsync(async (req: Request, res: Response) => {
  const claim = await claimService.createClaim(req.body);
  res.status(httpStatus.CREATED).send(claim);
});

const getClaims = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await claimService.queryClaims(filter, options);
  res.send(result);
});

const getClaim = catchAsync(async (req: Request, res: Response) => {
  const claim = await claimService.getClaimById(req.params.claimId);
  if (!claim) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Claim not found');
  }
  res.send(claim);
});

const updateClaim = catchAsync(async (req: Request, res: Response) => {
  const claim = await claimService.updateClaimById(
    req.params.claimId,
    req.body
  );
  res.send(claim);
});

const deleteClaim = catchAsync(async (req: Request, res: Response) => {
  await claimService.deleteClaimById(req.params.claimId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createClaim,
  getClaims,
  getClaim,
  updateClaim,
  deleteClaim,
};

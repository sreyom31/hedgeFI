import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { investService } from '../services';

const createInvest = catchAsync(async (req: Request, res: Response) => {
  const invest = await investService.createInvest(req.body);
  res.status(httpStatus.CREATED).send(invest);
});

const getInvests = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await investService.queryInvests(filter, options);
  res.send(result);
});

const getInvest = catchAsync(async (req: Request, res: Response) => {
  const invest = await investService.getInvestById(req.params.investId);
  if (!invest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Invest not found');
  }
  res.send(invest);
});

const updateInvest = catchAsync(async (req: Request, res: Response) => {
  const invest = await investService.updateInvestById(
    req.params.investId,
    req.body
  );
  res.send(invest);
});

const deleteInvest = catchAsync(async (req: Request, res: Response) => {
  await investService.deleteInvestById(req.params.investId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createInvest,
  getInvests,
  getInvest,
  updateInvest,
  deleteInvest,
};

import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { accumulateService } from '../services';

const createAccumulate = catchAsync(async (req: Request, res: Response) => {
  const accumulate = await accumulateService.createAccumulate(req.body);
  res.status(httpStatus.CREATED).send(accumulate);
});

const getAccumulates = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await accumulateService.queryAccumulates(filter, options);
  res.send(result);
});

const getAccumulate = catchAsync(async (req: Request, res: Response) => {
  const accumulate = await accumulateService.getAccumulateById(
    req.params.accumulateId
  );
  if (!accumulate) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Accumulate not found');
  }
  res.send(accumulate);
});

const updateAccumulate = catchAsync(async (req: Request, res: Response) => {
  const accumulate = await accumulateService.updateAccumulateById(
    req.params.accumulateId,
    req.body
  );
  res.send(accumulate);
});

const deleteAccumulate = catchAsync(async (req: Request, res: Response) => {
  await accumulateService.deleteAccumulateById(req.params.accumulateId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createAccumulate,
  getAccumulates,
  getAccumulate,
  updateAccumulate,
  deleteAccumulate,
};

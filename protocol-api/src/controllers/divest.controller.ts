import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { divestService } from '../services';

const createDivest = catchAsync(async (req: Request, res: Response) => {
  const divest = await divestService.createDivest(req.body);
  res.status(httpStatus.CREATED).send(divest);
});

const getDivests = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await divestService.queryDivests(filter, options);
  res.send(result);
});

const getDivest = catchAsync(async (req: Request, res: Response) => {
  const divest = await divestService.getDivestById(req.params.divestId);
  if (!divest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Divest not found');
  }
  res.send(divest);
});

const updateDivest = catchAsync(async (req: Request, res: Response) => {
  const divest = await divestService.updateDivestById(
    req.params.divestId,
    req.body
  );
  res.send(divest);
});

const deleteDivest = catchAsync(async (req: Request, res: Response) => {
  await divestService.deleteDivestById(req.params.divestId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createDivest,
  getDivests,
  getDivest,
  updateDivest,
  deleteDivest,
};

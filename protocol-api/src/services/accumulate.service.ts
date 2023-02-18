import httpStatus from 'http-status';
import { Accumulate, AccumulateUpdate } from '../shared/customTypes';
import AccumulateModel from '../models/accumulate/accumulate.model';
import ApiError from '../utils/ApiError';

const createAccumulate = async (accumulate: any) => {
  return AccumulateModel.create({
    splitter: accumulate.args[0],
    amount_c: parseInt(accumulate.args[1].hex),
    network: accumulate.args[2],
  });
};

const queryAccumulates = async (filter: any, options: any) => {
  const accumulates = await AccumulateModel.paginate(filter, options);
  return accumulates;
};

const getAccumulateById = async (id: string) => {
  AccumulateModel.findById(id);
};

const updateAccumulateById = async (
  id: string,
  updateBody: AccumulateUpdate
) => {
  const accumulate = await getAccumulateById(id);
  if (!accumulate) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Accumulate not found');
  }
  Object.assign(accumulate, updateBody);
  await accumulate.save();
  return accumulate;
};

const deleteAccumulateById = async (id: string) => {
  const accumulate = await getAccumulateById(id);
  if (!accumulate) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Accumulate not found');
  }
  await accumulate.remove();
  return accumulate;
};

export default {
  createAccumulate,
  queryAccumulates,
  getAccumulateById,
  updateAccumulateById,
  deleteAccumulateById,
};

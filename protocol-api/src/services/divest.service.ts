import httpStatus from 'http-status';
import { Divest, DivestUpdate } from '../shared/customTypes';
import DivestModel from '../models/divest/divest.model';
import ApiError from '../utils/ApiError';

const createDivest = async (divest: Divest) => {
  return DivestModel.create(divest);
};

const queryDivests = async (filter: any, options: any) => {
  const divests = await DivestModel.paginate(filter, options);
  return divests;
};

const getDivestById = async (id: string) => {
  DivestModel.findById(id);
};

const updateDivestById = async (id: string, updateBody: DivestUpdate) => {
  const divest = await getDivestById(id);
  if (!divest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Divest not found');
  }
  Object.assign(divest, updateBody);
  await divest.save();
  return divest;
};

const deleteDivestById = async (id: string) => {
  const divest = await getDivestById(id);
  if (!divest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Divest not found');
  }
  await divest.remove();
  return divest;
};

export default {
  createDivest,
  queryDivests,
  getDivestById,
  updateDivestById,
  deleteDivestById,
};

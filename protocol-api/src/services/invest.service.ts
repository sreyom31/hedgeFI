import httpStatus from 'http-status';
import { invest, investUpdate } from '../shared/customTypes';
import InvestModel from '../models/invest/invest.model';
import ApiError from '../utils/ApiError';

const createInvest = async (invest: any) => {
  return InvestModel.create({
    amount_c: parseInt(invest.args[0].hex),
    amount_cx: parseInt(invest.args[1].hex),
    amount_cy: parseInt(invest.args[2].hex),
    amount_c_incentive: parseInt(invest.args[3].hex),
  });
};

const queryInvests = async (filter: any, options: any) => {
  const invests = await InvestModel.paginate(filter, options);
  return invests;
};

const getInvestById = async (id: string) => {
  InvestModel.findById(id);
};

const updateInvestById = async (id: string, updateBody: investUpdate) => {
  const invest = await getInvestById(id);
  if (!invest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Invest not found');
  }
  Object.assign(invest, updateBody);
  await invest.save();
  return invest;
};

const deleteInvestById = async (id: string) => {
  const invest = await getInvestById(id);
  if (!invest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Invest not found');
  }
  await invest.remove();
  return invest;
};

export default {
  createInvest,
  queryInvests,
  getInvestById,
  updateInvestById,
  deleteInvestById,
};

import httpStatus from 'http-status';
import { protocol, protocolUpdate } from '../shared/customTypes';
import ProtocolModel from '../models/protocol/protocol.model';
import ApiError from '../utils/ApiError';

const createProtocol = async (protocol: any) => {
  return ProtocolModel.create({
    amount_c: parseInt(protocol.args[0].hex),
    amount_cx: parseInt(protocol.args[1].hex),
    amount_cy: parseInt(protocol.args[2].hex),
    amount_c_incentive: parseInt(protocol.args[3].hex),
  });
};

const queryProtocols = async (filter: any, options: any) => {
  const protocols = await ProtocolModel.paginate(filter, options);
  return protocols;
};

const getProtocolById = async (id: string) => {
  ProtocolModel.findById(id);
};

const updateProtocolById = async (id: string, updateBody: protocolUpdate) => {
  const protocol = await getProtocolById(id);
  if (!protocol) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Protocol not found');
  }
  Object.assign(protocol, updateBody);
  await protocol.save();
  return protocol;
};

const deleteProtocolById = async (id: string) => {
  const protocol = await getProtocolById(id);
  if (!protocol) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Protocol not found');
  }
  await protocol.remove();
  return protocol;
};

export default {
  createProtocol,
  queryProtocols,
  getProtocolById,
  updateProtocolById,
  deleteProtocolById,
};

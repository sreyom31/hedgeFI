import httpStatus from 'http-status';
import { Claim, ClaimUpdate } from '../shared/customTypes';
import ClaimModel from '../models/claim/claim.model';
import ApiError from '../utils/ApiError';

const createClaim = async (claim: Claim) => {
  return ClaimModel.create(claim);
};

const queryClaims = async (filter: any, options: any) => {
  const claims = await ClaimModel.paginate(filter, options);
  return claims;
};

const getClaimById = async (id: string) => {
  ClaimModel.findById(id);
};

const updateClaimById = async (id: string, updateBody: ClaimUpdate) => {
  const claim = await getClaimById(id);
  if (!claim) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Claim not found');
  }
  Object.assign(claim, updateBody);
  await claim.save();
  return claim;
};

const deleteClaimById = async (id: string) => {
  const claim = await getClaimById(id);
  if (!claim) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Claim not found');
  }
  await claim.remove();
  return claim;
};

export default {
  createClaim,
  queryClaims,
  getClaimById,
  updateClaimById,
  deleteClaimById,
};

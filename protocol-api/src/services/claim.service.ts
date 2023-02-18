import httpStatus from 'http-status';
import { Claim, ClaimUpdate } from '../shared/customTypes';
import ClaimModel from '../models/claim/claim.model';
import ApiError from '../utils/ApiError';

const createClaim = async (claim: any) => {
  return ClaimModel.create({
    claimant: claim.args[0],
    amount_A: parseInt(claim.args[1].hex),
    amount_B: parseInt(claim.args[2].hex),
    amount_c: parseInt(claim.args[3].hex),
    amount_cx: parseInt(claim.args[4].hex),
    amount_cy: parseInt(claim.args[5].hex),
  });
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

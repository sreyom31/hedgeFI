import { model } from 'mongoose';
import { IClaimDocument, IClaimModel } from './claim.types';
import ClaimSchema from './claim.schema';

const ClaimModel = model<IClaimDocument, IClaimModel>('claim', ClaimSchema);
export default ClaimModel;

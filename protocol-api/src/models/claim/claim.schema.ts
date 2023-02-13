import { Schema } from 'mongoose';
import { setLastUpdated } from './claim.methods';
import { toJSON, paginate } from '../plugins';

const ClaimSchema = new Schema({
  amount_c: {
    type: Number,
    required: true,
    trim: true,
  },
  amount_cx: {
    type: Number,
    required: true,
    trim: true,
  },
  amount_cy: {
    type: Number,
    required: true,
    trim: true,
  },
  amount_c_incentive: {
    type: Number,
    required: true,
    trim: true,
  },
  network: {
    type: String,
    trim: true,
  },
});

ClaimSchema.plugin(toJSON);
ClaimSchema.plugin(paginate);
ClaimSchema.methods.setLastUpdated = setLastUpdated;

export default ClaimSchema;

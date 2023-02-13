import { Schema } from 'mongoose';
import { setLastUpdated } from './claim.methods';
import { toJSON, paginate } from '../plugins';

const ClaimSchema = new Schema({
  claimant: {
    type: String,
    required: true,
    trim: true,
  },
  amount_A: {
    type: Number,
    required: true,
    trim: true,
  },
  amount_B: {
    type: Number,
    required: true,
    trim: true,
  },
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
  network: {
    type: String,
    trim: true,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

ClaimSchema.plugin(toJSON);
ClaimSchema.plugin(paginate);
ClaimSchema.methods.setLastUpdated = setLastUpdated;

export default ClaimSchema;

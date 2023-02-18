import { Schema } from 'mongoose';
import { setLastUpdated } from './invest.methods';
import { toJSON, paginate } from '../plugins';

const InvestSchema = new Schema({
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
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

InvestSchema.plugin(toJSON);
InvestSchema.plugin(paginate);
InvestSchema.methods.setLastUpdated = setLastUpdated;

export default InvestSchema;

import { Schema } from 'mongoose';
import { setLastUpdated } from './divest.methods';
import { toJSON, paginate } from '../plugins';

const DivestSchema = new Schema({
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

DivestSchema.plugin(toJSON);
DivestSchema.plugin(paginate);
DivestSchema.methods.setLastUpdated = setLastUpdated;

export default DivestSchema;

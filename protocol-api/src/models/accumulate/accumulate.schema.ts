import { Schema } from 'mongoose';
import { setLastUpdated } from './accumulate.methods';
import { toJSON, paginate } from '../plugins';

const AccumulateSchema = new Schema({
  splitter: {
    type: String,
    required: true,
    trim: true,
  },
  amount_c: {
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

AccumulateSchema.plugin(toJSON);
AccumulateSchema.plugin(paginate);
AccumulateSchema.methods.setLastUpdated = setLastUpdated;

export default AccumulateSchema;

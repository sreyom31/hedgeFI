import { model } from 'mongoose';
import { IAccumulateDocument, IAccumulateModel } from './accumulate.types';
import AccumulateSchema from './accumulate.schema';

const AccumulateModel = model<IAccumulateDocument, IAccumulateModel>(
  'accumulate',
  AccumulateSchema
);
export default AccumulateModel;

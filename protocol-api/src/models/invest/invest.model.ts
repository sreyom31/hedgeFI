import { model } from 'mongoose';
import { IInvestDocument, IInvestModel } from './invest.types';
import InvestSchema from './invest.schema';

const InvestModel = model<IInvestDocument, IInvestModel>(
  'invest',
  InvestSchema
);
export default InvestModel;

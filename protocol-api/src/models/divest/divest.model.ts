import { model } from 'mongoose';
import { IDivestDocument, IDivestModel } from './divest.types';
import DivestSchema from './divest.schema';

const DivestModel = model<IDivestDocument, IDivestModel>(
  'divest',
  DivestSchema
);
export default DivestModel;

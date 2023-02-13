import { Document, Model } from 'mongoose';

export interface IAccumulate {
  splitter: string;
  amount_c: number;
  network: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IAccumulateDocument extends IAccumulate, Document {
  setLastUpdated: (this: IAccumulateDocument) => Promise<void>;
}

export interface IAccumulateModel extends Model<IAccumulateDocument> {
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}

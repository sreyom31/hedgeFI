import { Document, Model } from 'mongoose';

export interface IDivest {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IDivestDocument extends IDivest, Document {
  setLastUpdated: (this: IDivestDocument) => Promise<void>;
}

export interface IDivestModel extends Model<IDivestDocument> {
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

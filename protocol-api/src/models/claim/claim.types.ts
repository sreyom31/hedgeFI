import { Document, Model } from 'mongoose';

export interface IClaim {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IClaimDocument extends IClaim, Document {
  setLastUpdated: (this: IClaimDocument) => Promise<void>;
}

export interface IClaimModel extends Model<IClaimDocument> {
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

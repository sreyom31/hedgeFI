import { Document, Model } from 'mongoose';

export interface IInvest {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IInvestDocument extends IInvest, Document {
  setLastUpdated: (this: IInvestDocument) => Promise<void>;
}

export interface IInvestModel extends Model<IInvestDocument> {
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

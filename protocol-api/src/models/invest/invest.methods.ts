import { IInvestDocument } from './invest.types';

export async function setLastUpdated(this: IInvestDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

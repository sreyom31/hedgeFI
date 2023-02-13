import { IClaimDocument } from './claim.types';

export async function setLastUpdated(this: IClaimDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

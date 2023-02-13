import { IAccumulateDocument } from './accumulate.types';

export async function setLastUpdated(this: IAccumulateDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

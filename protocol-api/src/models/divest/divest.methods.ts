import { IDivestDocument } from './divest.types';

export async function setLastUpdated(this: IDivestDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

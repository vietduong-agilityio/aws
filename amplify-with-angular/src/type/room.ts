import { Building } from './building';

export type Room = {
  roomId?: string,
  buildingId: string,
  name: string,
  createdAt?: string,
  updatedAt?: string,
  building?: Building,
}
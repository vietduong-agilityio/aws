import { Room } from './room';

export type Booking = {
  bookingId?: string,
  buildingId: string,
  roomId: string,
  startTime: string,
  endTime: string,
  userId: string,
  createdAt?: string,
  updatedAt?: string,
  room?: Room
}
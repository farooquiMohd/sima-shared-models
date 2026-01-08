import { z } from 'zod';

const Status = z.enum(['ACTIVE', 'INACTIVE']);

// MPP Schema
export const mppSchema = z.object({
  id: z.number().int().positive().optional(),
  mppName: z.string().min(1, 'MPP name is required'),
  mppCode: z.string().min(1, 'MPP code is required'),
  latitude: z.string().min(1, 'Latitude is required'),
  longitude: z.string().min(1, 'Longitude is required'),
  status: Status.default('ACTIVE'),
  mccId: z.number().int().positive('MCC ID is required'),
  stateId: z.number().int().positive('State ID is required'),
  districtId: z.number().int().positive('District ID is required'),
  tehsilId: z.number().int().positive('Tehsil ID is required'),
  villageId: z.number().int().positive('Village ID is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type MPP = z.infer<typeof mppSchema>;

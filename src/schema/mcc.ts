import { z } from 'zod';

const Status = z.enum(['ACTIVE', 'INACTIVE']);
// MCC Schema
export const mccSchema = z.object({
  id: z.number().int().positive().optional(),
  mccName: z.string().min(1, 'MCC name is required'),
  mccCode: z.string().min(1, 'MCC code is required'),
  status: Status.default('ACTIVE'),
  stateId: z.number().int().positive('State ID is required'),
  districtId: z.number().int().positive('District ID is required'),
  tehsilId: z.number().int().positive('Tehsil ID is required'),
  villageId: z.number().int().positive('Village ID is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type MCC = z.infer<typeof mccSchema>;

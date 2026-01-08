import { z } from 'zod';

const Status = z.enum(['ACTIVE', 'INACTIVE']);

// District Schema
export const districtSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().min(1, 'District name is required'),
  status: Status.default('ACTIVE'),
  stateId: z.number().int().positive('State ID is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type District = z.infer<typeof districtSchema>;

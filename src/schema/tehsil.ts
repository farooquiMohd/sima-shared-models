import { z } from 'zod';

const Status = z.enum(['ACTIVE', 'INACTIVE']);

export const tehsilSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  status: Status,
  districtId: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Tehsil = z.infer<typeof tehsilSchema>;

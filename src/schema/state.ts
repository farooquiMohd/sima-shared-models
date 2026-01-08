import { z } from 'zod';

const Status = z.enum(['ACTIVE', 'INACTIVE']);

export const stateSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  code: z.string().nullable(),
  status: Status,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type State = z.infer<typeof stateSchema>;

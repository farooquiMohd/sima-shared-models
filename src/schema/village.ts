import { z } from 'zod';
const Status = z.enum(['ACTIVE', 'INACTIVE']);
// export type Status = z.infer<typeof Status>;

export const villageSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  pincode: z.string().nullable(),
  status: Status,
  tehsilId: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Village = z.infer<typeof villageSchema>;

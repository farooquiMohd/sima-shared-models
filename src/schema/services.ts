import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.number().int().positive(),
  serviceName: z.string().min(1),
  description: z.string().nullable(),
  price: z.number().int(),
  duration: z.string(),
  serviceCategory: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Service = z.infer<typeof serviceSchema>;

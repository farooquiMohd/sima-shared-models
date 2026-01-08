import { z } from 'zod';

export const requestSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  department: z.string().min(1),
  type: z.string().min(1),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Request = z.infer<typeof requestSchema>;

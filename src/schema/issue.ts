import { z } from 'zod';

// Issue Schema
export const issueSchema = z.object({
  id: z.number().int().positive().optional(),
  title: z.string().min(1, 'Title is required'),
  severity: z.string().min(1, 'Severity is required'),
  description: z.string().nullable().optional(),
  categoryId: z.number().int().positive('Category ID is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type Issue = z.infer<typeof issueSchema>;

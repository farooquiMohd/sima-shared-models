import { z } from 'zod';

export const subCategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  description: z.string().nullable(),
  fileId: z.number().int().positive().nullable(),
  categoryId: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SubCategory = z.infer<typeof subCategorySchema>;

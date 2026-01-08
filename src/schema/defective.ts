import { z } from 'zod';

// Defective Schema
export const defectiveSchema = z.object({
  id: z.number().int().positive().optional(),
  itemName: z.string().min(1, 'Item name is required'),
  serialNumber: z.string().min(1, 'Serial number is required'),
  location: z.string().min(1, 'Location is required'),
  issueDescription: z.string().nullable().optional(),
  categoryId: z.number().int().positive('Category ID is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type Defective = z.infer<typeof defectiveSchema>;

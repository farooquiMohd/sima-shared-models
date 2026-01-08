import { z } from 'zod';

// Enums from Prisma schema
export const Status = z.enum(['ACTIVE', 'INACTIVE']);
export type Status = z.infer<typeof Status>;

export const TicketStatus = z.enum([
  'OPEN',
  'INPROGRESS',
  'PENDING',
  'RESOLVED',
]);
export type TicketStatus = z.infer<typeof TicketStatus>;

export const Priority = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);
export type Priority = z.infer<typeof Priority>;

// Category Schema
export const categorySchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().min(1, 'Category name is required'),
  description: z.string().nullable().optional(),
  status: Status.default('ACTIVE'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type Category = z.infer<typeof categorySchema>;

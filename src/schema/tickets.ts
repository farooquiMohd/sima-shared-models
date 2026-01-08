import { z } from 'zod';
export const ticketStatusSchema = z.enum(['OPEN', 'INPROGRESS', 'PENDING', 'RESOLVED']);

export const prioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);

export const ticketSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().nullable(),
  status: ticketStatusSchema,
  priority: prioritySchema,
  customerId: z.number().int().positive(),
  assigneeId: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Ticket = z.infer<typeof ticketSchema>;

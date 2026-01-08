import { z } from 'zod';
const TicketStatus = z.enum(['OPEN', 'INPROGRESS', 'PENDING', 'RESOLVED']);

const Priority = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);

export const ticketSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().nullable(),
  status: TicketStatus,
  priority: Priority,
  customerId: z.number().int().positive(),
  assigneeId: z.number().int().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Ticket = z.infer<typeof ticketSchema>;

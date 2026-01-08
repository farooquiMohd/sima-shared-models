import { z } from 'zod';

// Reuse Status enum from previous schemas
const Status = z.enum(['ACTIVE', 'INACTIVE']);

// Customer Schema
export const customerSchema = z.object({
  id: z.number().int().positive().optional(),
  companyName: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  status: Status.default('ACTIVE'),
  industry: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type Customer = z.infer<typeof customerSchema>;

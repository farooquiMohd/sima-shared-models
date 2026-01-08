import { z } from 'zod';

export const VendorStatus = z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']);
export type VendorStatus = z.infer<typeof VendorStatus>;

export const vendorSchema = z.object({
  id: z.number().int().positive(),
  vendor_name: z.string().min(1),
  category_id: z.number().int().positive(),
  contact_number: z.string().nullable(),
  email_address: z.string().nullable(),
  address: z.string().nullable(),
  gst_number: z.string().nullable(),
  pan_number: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Vendor = z.infer<typeof vendorSchema>;

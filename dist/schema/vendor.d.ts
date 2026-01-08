import { z } from 'zod';
export declare const VendorStatus: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
export type VendorStatus = z.infer<typeof VendorStatus>;
export declare const vendorSchema: z.ZodObject<{
    id: z.ZodNumber;
    vendor_name: z.ZodString;
    category_id: z.ZodNumber;
    contact_number: z.ZodNullable<z.ZodString>;
    email_address: z.ZodNullable<z.ZodString>;
    address: z.ZodNullable<z.ZodString>;
    gst_number: z.ZodNullable<z.ZodString>;
    pan_number: z.ZodNullable<z.ZodString>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    vendor_name: string;
    category_id: number;
    contact_number: string | null;
    email_address: string | null;
    address: string | null;
    gst_number: string | null;
    pan_number: string | null;
    created_at: Date;
    updated_at: Date;
}, {
    id: number;
    vendor_name: string;
    category_id: number;
    contact_number: string | null;
    email_address: string | null;
    address: string | null;
    gst_number: string | null;
    pan_number: string | null;
    created_at: Date;
    updated_at: Date;
}>;
export type Vendor = z.infer<typeof vendorSchema>;
//# sourceMappingURL=vendor.d.ts.map
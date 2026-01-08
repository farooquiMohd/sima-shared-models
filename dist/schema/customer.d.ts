import { z } from 'zod';
export declare const customerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    companyName: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    email: string;
    status: "ACTIVE" | "INACTIVE";
    companyName: string;
    phoneNumber: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    address?: string | null | undefined;
    industry?: string | null | undefined;
}, {
    email: string;
    companyName: string;
    phoneNumber: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    address?: string | null | undefined;
    industry?: string | null | undefined;
}>;
export type Customer = z.infer<typeof customerSchema>;
//# sourceMappingURL=customer.d.ts.map
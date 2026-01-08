import { z } from 'zod';
export declare const serviceSchema: z.ZodObject<{
    id: z.ZodNumber;
    serviceName: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    price: z.ZodNumber;
    duration: z.ZodString;
    serviceCategory: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    serviceName: string;
    price: number;
    duration: string;
    serviceCategory: string;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    serviceName: string;
    price: number;
    duration: string;
    serviceCategory: string;
}>;
export type Service = z.infer<typeof serviceSchema>;
//# sourceMappingURL=services.d.ts.map
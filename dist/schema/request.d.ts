import { z } from 'zod';
export declare const requestSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    department: z.ZodString;
    type: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    type: string;
    description: string | null;
    title: string;
    department: string;
}, {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    type: string;
    description: string | null;
    title: string;
    department: string;
}>;
export type Request = z.infer<typeof requestSchema>;
//# sourceMappingURL=request.d.ts.map
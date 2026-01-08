import { z } from 'zod';
export declare const defectiveSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    itemName: z.ZodString;
    serialNumber: z.ZodString;
    location: z.ZodString;
    issueDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categoryId: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    itemName: string;
    serialNumber: string;
    location: string;
    categoryId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issueDescription?: string | null | undefined;
}, {
    itemName: string;
    serialNumber: string;
    location: string;
    categoryId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issueDescription?: string | null | undefined;
}>;
export type Defective = z.infer<typeof defectiveSchema>;
//# sourceMappingURL=defective.d.ts.map
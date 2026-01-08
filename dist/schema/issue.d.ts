import { z } from 'zod';
export declare const issueSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    severity: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categoryId: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    categoryId: number;
    title: string;
    severity: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}, {
    categoryId: number;
    title: string;
    severity: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}>;
export type Issue = z.infer<typeof issueSchema>;
//# sourceMappingURL=issue.d.ts.map
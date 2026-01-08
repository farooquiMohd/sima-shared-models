import { z } from 'zod';
export declare const subCategorySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    fileId: z.ZodNullable<z.ZodNumber>;
    categoryId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    fileId: number | null;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    categoryId: number;
}, {
    id: number;
    name: string;
    fileId: number | null;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    categoryId: number;
}>;
export type SubCategory = z.infer<typeof subCategorySchema>;
//# sourceMappingURL=subcategory.d.ts.map
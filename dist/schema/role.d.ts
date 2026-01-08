import { z } from "zod";
export declare const roleSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}, {
    name: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}>;
export type Role = z.infer<typeof roleSchema>;
//# sourceMappingURL=role.d.ts.map
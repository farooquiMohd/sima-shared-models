import { z } from "zod";
export declare const moduleSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    Name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    Name: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}, {
    Name: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}>;
export type Module = z.infer<typeof moduleSchema>;
//# sourceMappingURL=modules.d.ts.map
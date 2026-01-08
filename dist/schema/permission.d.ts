import { z } from "zod";
export declare const permissionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    action: z.ZodArray<z.ZodString, "many">;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    action: string[];
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    action: string[];
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export type Permission = z.infer<typeof permissionSchema>;
//# sourceMappingURL=permission.d.ts.map
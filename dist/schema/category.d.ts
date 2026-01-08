import { z } from 'zod';
export declare const Status: z.ZodEnum<["ACTIVE", "INACTIVE"]>;
export type Status = z.infer<typeof Status>;
export declare const TicketStatus: z.ZodEnum<["OPEN", "INPROGRESS", "PENDING", "RESOLVED"]>;
export type TicketStatus = z.infer<typeof TicketStatus>;
export declare const Priority: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
export type Priority = z.infer<typeof Priority>;
export declare const categorySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    description?: string | null | undefined;
}, {
    name: string;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | null | undefined;
}>;
export type Category = z.infer<typeof categorySchema>;
//# sourceMappingURL=category.d.ts.map
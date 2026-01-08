import { z } from 'zod';
export declare const stateSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    code: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE"]>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    code: string | null;
    status: "ACTIVE" | "INACTIVE";
}, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    code: string | null;
    status: "ACTIVE" | "INACTIVE";
}>;
export type State = z.infer<typeof stateSchema>;
//# sourceMappingURL=state.d.ts.map
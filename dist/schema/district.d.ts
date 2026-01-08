import { z } from 'zod';
export declare const districtSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
    stateId: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    stateId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    name: string;
    stateId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
}>;
export type District = z.infer<typeof districtSchema>;
//# sourceMappingURL=district.d.ts.map
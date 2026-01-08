import { z } from 'zod';
export declare const mccSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    mccName: z.ZodString;
    mccCode: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
    stateId: z.ZodNumber;
    districtId: z.ZodNumber;
    tehsilId: z.ZodNumber;
    villageId: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE";
    tehsilId: number;
    stateId: number;
    mccName: string;
    mccCode: string;
    districtId: number;
    villageId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    tehsilId: number;
    stateId: number;
    mccName: string;
    mccCode: string;
    districtId: number;
    villageId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
}>;
export type MCC = z.infer<typeof mccSchema>;
//# sourceMappingURL=mcc.d.ts.map
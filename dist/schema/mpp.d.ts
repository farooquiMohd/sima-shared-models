import { z } from 'zod';
export declare const mppSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    mppName: z.ZodString;
    mppCode: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
    mccId: z.ZodNumber;
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
    districtId: number;
    villageId: number;
    mppName: string;
    mppCode: string;
    latitude: string;
    longitude: string;
    mccId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    tehsilId: number;
    stateId: number;
    districtId: number;
    villageId: number;
    mppName: string;
    mppCode: string;
    latitude: string;
    longitude: string;
    mccId: number;
    id?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
}>;
export type MPP = z.infer<typeof mppSchema>;
//# sourceMappingURL=mpp.d.ts.map
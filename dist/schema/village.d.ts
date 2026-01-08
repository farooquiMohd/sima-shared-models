import { z } from 'zod';
export declare const villageSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    pincode: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE"]>;
    tehsilId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: "ACTIVE" | "INACTIVE";
    pincode: string | null;
    tehsilId: number;
}, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: "ACTIVE" | "INACTIVE";
    pincode: string | null;
    tehsilId: number;
}>;
export type Village = z.infer<typeof villageSchema>;
//# sourceMappingURL=village.d.ts.map
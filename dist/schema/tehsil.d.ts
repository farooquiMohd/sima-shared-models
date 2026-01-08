import { z } from 'zod';
export declare const tehsilSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    status: z.ZodEnum<["ACTIVE", "INACTIVE"]>;
    districtId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: "ACTIVE" | "INACTIVE";
    districtId: number;
}, {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: "ACTIVE" | "INACTIVE";
    districtId: number;
}>;
export type Tehsil = z.infer<typeof tehsilSchema>;
//# sourceMappingURL=tehsil.d.ts.map
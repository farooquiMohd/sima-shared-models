import { z } from "zod";
export declare const otpSchema: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    otp: string;
}, {
    email: string;
    otp: string;
}>;
export type Otp = z.infer<typeof otpSchema>;
//# sourceMappingURL=otp.d.ts.map
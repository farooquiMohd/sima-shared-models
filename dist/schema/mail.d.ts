import { z } from "zod";
export declare const sendEmailSchema: z.ZodObject<{
    to: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
    subject: z.ZodString;
    text: z.ZodOptional<z.ZodString>;
    html: z.ZodOptional<z.ZodString>;
    bcc: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
}, "strip", z.ZodTypeAny, {
    to: string | string[];
    subject: string;
    text?: string | undefined;
    html?: string | undefined;
    bcc?: string | string[] | undefined;
}, {
    to: string | string[];
    subject: string;
    text?: string | undefined;
    html?: string | undefined;
    bcc?: string | string[] | undefined;
}>;
export type SendEmail = z.infer<typeof sendEmailSchema>;
//# sourceMappingURL=mail.d.ts.map
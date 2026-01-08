import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    password: z.ZodString;
    fileId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    original_password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mobileNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roleId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    provider: z.ZodDefault<z.ZodEnum<["credentials", "google"]>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    emailVerified: boolean;
    password: string;
    provider: "credentials" | "google";
    id?: number | undefined;
    fileId?: number | null | undefined;
    original_password?: string | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    name: string;
    email: string;
    password: string;
    id?: number | undefined;
    emailVerified?: boolean | undefined;
    fileId?: number | null | undefined;
    original_password?: string | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
    provider?: "credentials" | "google" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export declare const userRegisterSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    mobileNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    mobileNumber?: string | undefined;
}, {
    name: string;
    email: string;
    password: string;
    mobileNumber?: string | undefined;
}>;
export declare const userLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type User = z.infer<typeof userSchema>;
export type UserRegister = z.infer<typeof userRegisterSchema>;
export type UserLogin = z.infer<typeof userLoginSchema>;
//# sourceMappingURL=user.d.ts.map
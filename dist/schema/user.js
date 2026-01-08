"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginSchema = exports.userRegisterSchema = exports.userSchema = void 0;
var zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    emailVerified: zod_1.z.boolean().default(false),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters"),
    fileId: zod_1.z.number().int().nullable().optional(),
    original_password: zod_1.z.string().nullable().optional(),
    mobileNumber: zod_1.z.string().nullable().optional(),
    roleId: zod_1.z.number().int().nullable().optional(),
    provider: zod_1.z.enum(["credentials", "google"]).default("credentials"),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
exports.userRegisterSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters"),
    mobileNumber: zod_1.z.string().optional(),
});
exports.userLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(1, "Password is required"),
});

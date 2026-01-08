"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpSchema = void 0;
var zod_1 = require("zod");
exports.otpSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    otp: zod_1.z.string().length(6, "OTP must be 6 digits"),
});

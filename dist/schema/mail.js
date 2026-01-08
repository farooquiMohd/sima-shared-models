"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailSchema = void 0;
var zod_1 = require("zod");
exports.sendEmailSchema = zod_1.z.object({
    to: zod_1.z.union([zod_1.z.string().email(), zod_1.z.array(zod_1.z.string().email())]),
    subject: zod_1.z.string().min(1, "Subject is required"),
    text: zod_1.z.string().optional(),
    html: zod_1.z.string().optional(),
    bcc: zod_1.z.union([zod_1.z.string().email(), zod_1.z.array(zod_1.z.string().email())]).optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSchema = void 0;
var zod_1 = require("zod");
exports.requestSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    title: zod_1.z.string().min(1),
    department: zod_1.z.string().min(1),
    type: zod_1.z.string().min(1),
    description: zod_1.z.string().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

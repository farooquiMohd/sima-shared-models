"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleSchema = void 0;
var zod_1 = require("zod");
exports.moduleSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    Name: zod_1.z.string().min(1, "Module name is required"),
    description: zod_1.z.string().nullable().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSchema = void 0;
var zod_1 = require("zod");
exports.roleSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    name: zod_1.z.string().min(1, "Role name is required"),
    description: zod_1.z.string().nullable().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

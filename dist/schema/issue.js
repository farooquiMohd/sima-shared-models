"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueSchema = void 0;
var zod_1 = require("zod");
// Issue Schema
exports.issueSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    title: zod_1.z.string().min(1, 'Title is required'),
    severity: zod_1.z.string().min(1, 'Severity is required'),
    description: zod_1.z.string().nullable().optional(),
    categoryId: zod_1.z.number().int().positive('Category ID is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

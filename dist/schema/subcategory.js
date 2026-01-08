"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategorySchema = void 0;
var zod_1 = require("zod");
exports.subCategorySchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(1),
    description: zod_1.z.string().nullable(),
    fileId: zod_1.z.number().int().positive().nullable(),
    categoryId: zod_1.z.number().int().positive(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

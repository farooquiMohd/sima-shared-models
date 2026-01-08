"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defectiveSchema = void 0;
var zod_1 = require("zod");
// Defective Schema
exports.defectiveSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    itemName: zod_1.z.string().min(1, 'Item name is required'),
    serialNumber: zod_1.z.string().min(1, 'Serial number is required'),
    location: zod_1.z.string().min(1, 'Location is required'),
    issueDescription: zod_1.z.string().nullable().optional(),
    categoryId: zod_1.z.number().int().positive('Category ID is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

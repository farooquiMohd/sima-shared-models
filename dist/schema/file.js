"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSchema = void 0;
var zod_1 = require("zod");
exports.fileSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    filename: zod_1.z.string(),
    originalName: zod_1.z.string(),
    mimeType: zod_1.z.string(),
    size: zod_1.z.number().int(),
    filePath: zod_1.z.string(),
    fileContent: zod_1.z.any(), // Buffer/Bytes
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

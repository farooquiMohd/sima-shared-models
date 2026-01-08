"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
exports.stateSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(1),
    code: zod_1.z.string().nullable(),
    status: Status,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
// District Schema
exports.districtSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    name: zod_1.z.string().min(1, 'District name is required'),
    status: Status.default('ACTIVE'),
    stateId: zod_1.z.number().int().positive('State ID is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

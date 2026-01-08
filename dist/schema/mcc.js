"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mccSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
// MCC Schema
exports.mccSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    mccName: zod_1.z.string().min(1, 'MCC name is required'),
    mccCode: zod_1.z.string().min(1, 'MCC code is required'),
    status: Status.default('ACTIVE'),
    stateId: zod_1.z.number().int().positive('State ID is required'),
    districtId: zod_1.z.number().int().positive('District ID is required'),
    tehsilId: zod_1.z.number().int().positive('Tehsil ID is required'),
    villageId: zod_1.z.number().int().positive('Village ID is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

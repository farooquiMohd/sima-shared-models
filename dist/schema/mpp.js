"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mppSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
// MPP Schema
exports.mppSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    mppName: zod_1.z.string().min(1, 'MPP name is required'),
    mppCode: zod_1.z.string().min(1, 'MPP code is required'),
    latitude: zod_1.z.string().min(1, 'Latitude is required'),
    longitude: zod_1.z.string().min(1, 'Longitude is required'),
    status: Status.default('ACTIVE'),
    mccId: zod_1.z.number().int().positive('MCC ID is required'),
    stateId: zod_1.z.number().int().positive('State ID is required'),
    districtId: zod_1.z.number().int().positive('District ID is required'),
    tehsilId: zod_1.z.number().int().positive('Tehsil ID is required'),
    villageId: zod_1.z.number().int().positive('Village ID is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

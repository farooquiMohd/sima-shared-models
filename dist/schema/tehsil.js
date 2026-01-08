"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tehsilSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
exports.tehsilSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(1),
    status: Status,
    districtId: zod_1.z.number().int().positive(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSchema = void 0;
var zod_1 = require("zod");
exports.serviceSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    serviceName: zod_1.z.string().min(1),
    description: zod_1.z.string().nullable(),
    price: zod_1.z.number().int(),
    duration: zod_1.z.string(),
    serviceCategory: zod_1.z.string().min(1),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

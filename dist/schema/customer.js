"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
var zod_1 = require("zod");
// Reuse Status enum from previous schemas
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
// Customer Schema
exports.customerSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    companyName: zod_1.z.string().min(1, 'Company name is required'),
    email: zod_1.z.string().email('Invalid email address').min(1, 'Email is required'),
    phoneNumber: zod_1.z.string().min(1, 'Phone number is required'),
    status: Status.default('ACTIVE'),
    industry: zod_1.z.string().nullable().optional(),
    address: zod_1.z.string().nullable().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

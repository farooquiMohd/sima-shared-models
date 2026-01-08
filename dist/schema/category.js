"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = exports.Priority = exports.TicketStatus = exports.Status = void 0;
var zod_1 = require("zod");
// Enums from Prisma schema
exports.Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
exports.TicketStatus = zod_1.z.enum([
    'OPEN',
    'INPROGRESS',
    'PENDING',
    'RESOLVED',
]);
exports.Priority = zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);
// Category Schema
exports.categorySchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    name: zod_1.z.string().min(1, 'Category name is required'),
    description: zod_1.z.string().nullable().optional(),
    status: exports.Status.default('ACTIVE'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

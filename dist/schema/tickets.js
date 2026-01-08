"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketSchema = void 0;
var zod_1 = require("zod");
var TicketStatus = zod_1.z.enum(['OPEN', 'INPROGRESS', 'PENDING', 'RESOLVED']);
var Priority = zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);
exports.ticketSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().nullable(),
    status: TicketStatus,
    priority: Priority,
    customerId: zod_1.z.number().int().positive(),
    assigneeId: zod_1.z.number().int().positive(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

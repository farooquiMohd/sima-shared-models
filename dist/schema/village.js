"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.villageSchema = void 0;
var zod_1 = require("zod");
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']);
// export type Status = z.infer<typeof Status>;
exports.villageSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    name: zod_1.z.string().min(1),
    pincode: zod_1.z.string().nullable(),
    status: Status,
    tehsilId: zod_1.z.number().int().positive(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});

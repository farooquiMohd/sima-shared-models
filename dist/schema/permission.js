"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionSchema = void 0;
var zod_1 = require("zod");
exports.permissionSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    action: zod_1.z.array(zod_1.z.string()),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

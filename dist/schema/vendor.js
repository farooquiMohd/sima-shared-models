"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorSchema = exports.VendorStatus = void 0;
var zod_1 = require("zod");
exports.VendorStatus = zod_1.z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']);
exports.vendorSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive(),
    vendor_name: zod_1.z.string().min(1),
    category_id: zod_1.z.number().int().positive(),
    contact_number: zod_1.z.string().nullable(),
    email_address: zod_1.z.string().nullable(),
    address: zod_1.z.string().nullable(),
    gst_number: zod_1.z.string().nullable(),
    pan_number: zod_1.z.string().nullable(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});

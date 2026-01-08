"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetSchema = exports.MaintenanceType = exports.PhysicalStatus = void 0;
var zod_1 = require("zod");
// Enums from Prisma schema
exports.PhysicalStatus = zod_1.z.enum([
    'NEW',
    'GOOD',
    'UNDER_MAINTENANCE',
    'DAMAGED',
    'RETIRED',
    'OLD',
]);
exports.MaintenanceType = zod_1.z.enum([
    'NONE',
    'MONTHLY',
    'QUARTERLY',
    'YEARLY',
    'HALF_YEARLY',
]);
var Status = zod_1.z.enum(['ACTIVE', 'INACTIVE']); // Assuming Status enum exists
// Main Asset Schema
exports.assetSchema = zod_1.z.object({
    id: zod_1.z.number().int().positive().optional(),
    assetName: zod_1.z.string().min(1, 'Asset name is required'),
    assetCode: zod_1.z.string().min(1, 'Asset code is required'),
    assetDescription: zod_1.z.string().nullable().optional(),
    make: zod_1.z.string().nullable().optional(),
    fileId: zod_1.z.number().int().positive().nullable().optional(),
    acquisitionDate: zod_1.z.date().or(zod_1.z.string().pipe(zod_1.z.coerce.date())),
    retireDate: zod_1.z
        .date()
        .or(zod_1.z.string().pipe(zod_1.z.coerce.date()))
        .nullable()
        .optional(),
    depreciationRate: zod_1.z.string().nullable().optional(),
    voucherDate: zod_1.z
        .date()
        .or(zod_1.z.string().pipe(zod_1.z.coerce.date()))
        .nullable()
        .optional(),
    voucherNumber: zod_1.z.string().nullable().optional(),
    invoiceDate: zod_1.z
        .date()
        .or(zod_1.z.string().pipe(zod_1.z.coerce.date()))
        .nullable()
        .optional(),
    invoiceNumber: zod_1.z.string().nullable().optional(),
    poDate: zod_1.z.date().or(zod_1.z.string().pipe(zod_1.z.coerce.date())).nullable().optional(),
    poNumber: zod_1.z.string().nullable().optional(),
    physicalStatus: exports.PhysicalStatus.default('GOOD'),
    calibration_maintenance: exports.MaintenanceType.default('NONE'),
    preventive_maintenance: exports.MaintenanceType.default('NONE'),
    // Relations
    categoryId: zod_1.z.number().int().positive(),
    subCategoryId: zod_1.z.number().int().positive(),
    vendorId: zod_1.z.number().int().positive(),
    status: Status.default('ACTIVE'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});

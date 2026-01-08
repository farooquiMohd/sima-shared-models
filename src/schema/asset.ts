import { z } from 'zod';

// Enums from Prisma schema
export const PhysicalStatus = z.enum([
  'NEW',
  'GOOD',
  'UNDER_MAINTENANCE',
  'DAMAGED',
  'RETIRED',
  'OLD',
]);
export type PhysicalStatus = z.infer<typeof PhysicalStatus>;

export const MaintenanceType = z.enum([
  'NONE',
  'MONTHLY',
  'QUARTERLY',
  'YEARLY',
  'HALF_YEARLY',
]);
export type MaintenanceType = z.infer<typeof MaintenanceType>;

const Status = z.enum(['ACTIVE', 'INACTIVE']); // Assuming Status enum exists

// Main Asset Schema
export const assetSchema = z.object({
  id: z.number().int().positive().optional(),

  assetName: z.string().min(1, 'Asset name is required'),
  assetCode: z.string().min(1, 'Asset code is required'),
  assetDescription: z.string().nullable().optional(),

  make: z.string().nullable().optional(),
  fileId: z.number().int().positive().nullable().optional(),

  acquisitionDate: z.date().or(z.string().pipe(z.coerce.date())),
  retireDate: z
    .date()
    .or(z.string().pipe(z.coerce.date()))
    .nullable()
    .optional(),

  depreciationRate: z.string().nullable().optional(),

  voucherDate: z
    .date()
    .or(z.string().pipe(z.coerce.date()))
    .nullable()
    .optional(),
  voucherNumber: z.string().nullable().optional(),

  invoiceDate: z
    .date()
    .or(z.string().pipe(z.coerce.date()))
    .nullable()
    .optional(),
  invoiceNumber: z.string().nullable().optional(),

  poDate: z.date().or(z.string().pipe(z.coerce.date())).nullable().optional(),
  poNumber: z.string().nullable().optional(),

  physicalStatus: PhysicalStatus.default('GOOD'),
  calibration_maintenance: MaintenanceType.default('NONE'),
  preventive_maintenance: MaintenanceType.default('NONE'),

  // Relations
  categoryId: z.number().int().positive(),
  subCategoryId: z.number().int().positive(),
  vendorId: z.number().int().positive(),

  status: Status.default('ACTIVE'),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Type inference
export type Asset = z.infer<typeof assetSchema>;

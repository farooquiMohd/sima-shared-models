import { z } from "zod";
export declare const providerSchema: z.ZodEnum<["credentials", "google"]>;
export declare const receiptStatusSchema: z.ZodEnum<["RECEIVED", "ACCEPTED", "REJECTED"]>;
export declare const poStatusSchema: z.ZodEnum<["DRAFT", "ISSUED", "PARTIALLY_DELIVERED", "DELIVERED", "CANCELLED", "CLOSED"]>;
export declare const transportModeSchema: z.ZodEnum<["ROAD", "RAIL", "SEA", "AIR", "SELF_PICKUP"]>;
export declare const prStatusSchema: z.ZodEnum<["DRAFT", "SUBMITTED", "APPROVED", "REJECTED", "CLOSED"]>;
export declare const urgencyLevelSchema: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
export declare const projectTypeSchema: z.ZodEnum<["HAM", "EPC", "BOT", "OTHER"]>;
export declare const projectStatusSchema: z.ZodEnum<["PLANNED", "IN_PROGRESS", "ON_HOLD", "COMPLETED", "CANCELLED"]>;
export declare const dieselTransactionTypeSchema: z.ZodEnum<["DIESEL_RECEIPT", "DIESEL_ISSUE"]>;
export declare const labourStatusSchema: z.ZodEnum<["ACTIVE", "INACTIVE", "LEFT", "BLACKLISTED"]>;
export declare const labourTypeSchema: z.ZodEnum<["DIRECT", "CONTRACT"]>;
export declare const vendorStatusSchema: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
export declare const vendorTypeSchema: z.ZodEnum<["DIRECT", "INVENTORY"]>;
export declare const supplyStatusSchema: z.ZodEnum<["PENDING", "APPROVED", "IN_TRANSIT", "DELIVERED", "REJECTED"]>;
//# sourceMappingURL=enums.d.ts.map
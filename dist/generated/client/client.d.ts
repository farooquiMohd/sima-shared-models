import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assets
 * const assets = await prisma.asset.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Asset
 *
 */
export type Asset = Prisma.AssetModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model Customer
 *
 */
export type Customer = Prisma.CustomerModel;
/**
 * Model Defective
 *
 */
export type Defective = Prisma.DefectiveModel;
/**
 * Model District
 *
 */
export type District = Prisma.DistrictModel;
/**
 * Model File
 *
 */
export type File = Prisma.FileModel;
/**
 * Model Issue
 *
 */
export type Issue = Prisma.IssueModel;
/**
 * Model MCC
 *
 */
export type MCC = Prisma.MCCModel;
/**
 * Model Module
 *
 */
export type Module = Prisma.ModuleModel;
/**
 * Model MPP
 *
 */
export type MPP = Prisma.MPPModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model Request
 *
 */
export type Request = Prisma.RequestModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model Service
 *
 */
export type Service = Prisma.ServiceModel;
/**
 * Model State
 *
 */
export type State = Prisma.StateModel;
/**
 * Model SubCategory
 *
 */
export type SubCategory = Prisma.SubCategoryModel;
/**
 * Model Tehsil
 *
 */
export type Tehsil = Prisma.TehsilModel;
/**
 * Model Ticket
 *
 */
export type Ticket = Prisma.TicketModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Vendor
 *
 */
export type Vendor = Prisma.VendorModel;
/**
 * Model Village
 *
 */
export type Village = Prisma.VillageModel;
//# sourceMappingURL=client.d.ts.map
import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Asset: "Asset";
    readonly Category: "Category";
    readonly Customer: "Customer";
    readonly Defective: "Defective";
    readonly District: "District";
    readonly File: "File";
    readonly Issue: "Issue";
    readonly MCC: "MCC";
    readonly Module: "Module";
    readonly MPP: "MPP";
    readonly Permission: "Permission";
    readonly Request: "Request";
    readonly Role: "Role";
    readonly Service: "Service";
    readonly State: "State";
    readonly SubCategory: "SubCategory";
    readonly Tehsil: "Tehsil";
    readonly Ticket: "Ticket";
    readonly User: "User";
    readonly Vendor: "Vendor";
    readonly Village: "Village";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AssetScalarFieldEnum: {
    readonly id: "id";
    readonly assetName: "assetName";
    readonly assetCode: "assetCode";
    readonly assetDescription: "assetDescription";
    readonly make: "make";
    readonly fileId: "fileId";
    readonly acquisitionDate: "acquisitionDate";
    readonly retireDate: "retireDate";
    readonly depreciationRate: "depreciationRate";
    readonly voucherDate: "voucherDate";
    readonly voucherNumber: "voucherNumber";
    readonly invoiceDate: "invoiceDate";
    readonly invoiceNumber: "invoiceNumber";
    readonly poDate: "poDate";
    readonly poNumber: "poNumber";
    readonly physicalStatus: "physicalStatus";
    readonly calibration_maintenance: "calibration_maintenance";
    readonly preventive_maintenance: "preventive_maintenance";
    readonly categoryId: "categoryId";
    readonly subCategoryId: "subCategoryId";
    readonly vendorId: "vendorId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly companyName: "companyName";
    readonly email: "email";
    readonly phoneNumber: "phoneNumber";
    readonly status: "status";
    readonly industry: "industry";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const DefectiveScalarFieldEnum: {
    readonly id: "id";
    readonly itemName: "itemName";
    readonly serialNumber: "serialNumber";
    readonly location: "location";
    readonly issueDescription: "issueDescription";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DefectiveScalarFieldEnum = (typeof DefectiveScalarFieldEnum)[keyof typeof DefectiveScalarFieldEnum];
export declare const DistrictScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly status: "status";
    readonly stateId: "stateId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly id: "id";
    readonly filename: "filename";
    readonly originalName: "originalName";
    readonly mimeType: "mimeType";
    readonly size: "size";
    readonly filePath: "filePath";
    readonly fileContent: "fileContent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const IssueScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly severity: "severity";
    readonly description: "description";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum];
export declare const MCCScalarFieldEnum: {
    readonly id: "id";
    readonly mccName: "mccName";
    readonly mccCode: "mccCode";
    readonly status: "status";
    readonly stateId: "stateId";
    readonly districtId: "districtId";
    readonly tehsilId: "tehsilId";
    readonly villageId: "villageId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MCCScalarFieldEnum = (typeof MCCScalarFieldEnum)[keyof typeof MCCScalarFieldEnum];
export declare const ModuleScalarFieldEnum: {
    readonly id: "id";
    readonly Name: "Name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];
export declare const MPPScalarFieldEnum: {
    readonly id: "id";
    readonly mppName: "mppName";
    readonly mppCode: "mppCode";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly status: "status";
    readonly mccId: "mccId";
    readonly stateId: "stateId";
    readonly districtId: "districtId";
    readonly tehsilId: "tehsilId";
    readonly villageId: "villageId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MPPScalarFieldEnum = (typeof MPPScalarFieldEnum)[keyof typeof MPPScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly action: "action";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RequestScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly department: "department";
    readonly type: "type";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly serviceName: "serviceName";
    readonly description: "description";
    readonly price: "price";
    readonly duration: "duration";
    readonly serviceCategory: "serviceCategory";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const SubCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly fileId: "fileId";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum];
export declare const TehsilScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly status: "status";
    readonly districtId: "districtId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TehsilScalarFieldEnum = (typeof TehsilScalarFieldEnum)[keyof typeof TehsilScalarFieldEnum];
export declare const TicketScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly priority: "priority";
    readonly customerId: "customerId";
    readonly assigneeId: "assigneeId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly password: "password";
    readonly fileId: "fileId";
    readonly original_password: "original_password";
    readonly mobileNumber: "mobileNumber";
    readonly roleId: "roleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly provider: "provider";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const VendorScalarFieldEnum: {
    readonly id: "id";
    readonly vendor_name: "vendor_name";
    readonly category_id: "category_id";
    readonly contact_number: "contact_number";
    readonly email_address: "email_address";
    readonly address: "address";
    readonly gst_number: "gst_number";
    readonly pan_number: "pan_number";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum];
export declare const VillageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly pincode: "pincode";
    readonly status: "status";
    readonly tehsilId: "tehsilId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VillageScalarFieldEnum = (typeof VillageScalarFieldEnum)[keyof typeof VillageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
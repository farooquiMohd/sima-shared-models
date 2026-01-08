export declare const PhysicalStatus: {
    readonly NEW: "NEW";
    readonly GOOD: "GOOD";
    readonly UNDER_MAINTENANCE: "UNDER_MAINTENANCE";
    readonly DAMAGED: "DAMAGED";
    readonly RETIRED: "RETIRED";
    readonly OLD: "OLD";
};
export type PhysicalStatus = (typeof PhysicalStatus)[keyof typeof PhysicalStatus];
export declare const MaintenanceType: {
    readonly NONE: "NONE";
    readonly MONTHLY: "MONTHLY";
    readonly QUARTLY: "QUARTLY";
    readonly YEARLY: "YEARLY";
    readonly HALF_YEARLY: "HALF_YEARLY";
};
export type MaintenanceType = (typeof MaintenanceType)[keyof typeof MaintenanceType];
export declare const Status: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const TicketStatus: {
    readonly OPEN: "OPEN";
    readonly INPROGRESS: "INPROGRESS";
    readonly PENDING: "PENDING";
    readonly RESOLVED: "RESOLVED";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const Priority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
export declare const Provider: {
    readonly credentials: "credentials";
    readonly google: "google";
};
export type Provider = (typeof Provider)[keyof typeof Provider];
export declare const VendorStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type VendorStatus = (typeof VendorStatus)[keyof typeof VendorStatus];
//# sourceMappingURL=enums.d.ts.map
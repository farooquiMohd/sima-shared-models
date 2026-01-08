export * from './user';
export * from './mail';
export * from './otp';
export * from './file';
export * from './category';
export * from './subcategory';
export * from './village';
export * from './tehsil';
export * from './district';
export * from './state';
export * from './modules';
export * from './permission';
export * from './role';
export * from './vendor';
export * from './asset';
export * from './customer';
export * from './defective';
export * from './issue';
export * from './mcc';
export * from './mpp';
export * from './request';
export * from './services';
export * from './tickets';
export * from './enums';
export declare const allModels: {
    providerSchema: import("zod").ZodEnum<["credentials", "google"]>;
    receiptStatusSchema: import("zod").ZodEnum<["RECEIVED", "ACCEPTED", "REJECTED"]>;
    poStatusSchema: import("zod").ZodEnum<["DRAFT", "ISSUED", "PARTIALLY_DELIVERED", "DELIVERED", "CANCELLED", "CLOSED"]>;
    transportModeSchema: import("zod").ZodEnum<["ROAD", "RAIL", "SEA", "AIR", "SELF_PICKUP"]>;
    prStatusSchema: import("zod").ZodEnum<["DRAFT", "SUBMITTED", "APPROVED", "REJECTED", "CLOSED"]>;
    urgencyLevelSchema: import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
    projectTypeSchema: import("zod").ZodEnum<["HAM", "EPC", "BOT", "OTHER"]>;
    projectStatusSchema: import("zod").ZodEnum<["PLANNED", "IN_PROGRESS", "ON_HOLD", "COMPLETED", "CANCELLED"]>;
    dieselTransactionTypeSchema: import("zod").ZodEnum<["DIESEL_RECEIPT", "DIESEL_ISSUE"]>;
    labourStatusSchema: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "LEFT", "BLACKLISTED"]>;
    labourTypeSchema: import("zod").ZodEnum<["DIRECT", "CONTRACT"]>;
    vendorStatusSchema: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
    vendorTypeSchema: import("zod").ZodEnum<["DIRECT", "INVENTORY"]>;
    supplyStatusSchema: import("zod").ZodEnum<["PENDING", "APPROVED", "IN_TRANSIT", "DELIVERED", "REJECTED"]>;
    ticketSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        title: import("zod").ZodString;
        description: import("zod").ZodNullable<import("zod").ZodString>;
        status: import("zod").ZodEnum<["OPEN", "INPROGRESS", "PENDING", "RESOLVED"]>;
        priority: import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
        customerId: import("zod").ZodNumber;
        assigneeId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: "OPEN" | "INPROGRESS" | "PENDING" | "RESOLVED";
        description: string | null;
        title: string;
        priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        customerId: number;
        assigneeId: number;
    }, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: "OPEN" | "INPROGRESS" | "PENDING" | "RESOLVED";
        description: string | null;
        title: string;
        priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
        customerId: number;
        assigneeId: number;
    }>;
    serviceSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        serviceName: import("zod").ZodString;
        description: import("zod").ZodNullable<import("zod").ZodString>;
        price: import("zod").ZodNumber;
        duration: import("zod").ZodString;
        serviceCategory: import("zod").ZodString;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        serviceName: string;
        price: number;
        duration: string;
        serviceCategory: string;
    }, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        serviceName: string;
        price: number;
        duration: string;
        serviceCategory: string;
    }>;
    requestSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        title: import("zod").ZodString;
        department: import("zod").ZodString;
        type: import("zod").ZodString;
        description: import("zod").ZodNullable<import("zod").ZodString>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        description: string | null;
        title: string;
        department: string;
    }, {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        description: string | null;
        title: string;
        department: string;
    }>;
    mppSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        mppName: import("zod").ZodString;
        mppCode: import("zod").ZodString;
        latitude: import("zod").ZodString;
        longitude: import("zod").ZodString;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        mccId: import("zod").ZodNumber;
        stateId: import("zod").ZodNumber;
        districtId: import("zod").ZodNumber;
        tehsilId: import("zod").ZodNumber;
        villageId: import("zod").ZodNumber;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        status: "ACTIVE" | "INACTIVE";
        tehsilId: number;
        stateId: number;
        districtId: number;
        villageId: number;
        mppName: string;
        mppCode: string;
        latitude: string;
        longitude: string;
        mccId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        tehsilId: number;
        stateId: number;
        districtId: number;
        villageId: number;
        mppName: string;
        mppCode: string;
        latitude: string;
        longitude: string;
        mccId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
    }>;
    mccSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        mccName: import("zod").ZodString;
        mccCode: import("zod").ZodString;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        stateId: import("zod").ZodNumber;
        districtId: import("zod").ZodNumber;
        tehsilId: import("zod").ZodNumber;
        villageId: import("zod").ZodNumber;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        status: "ACTIVE" | "INACTIVE";
        tehsilId: number;
        stateId: number;
        mccName: string;
        mccCode: string;
        districtId: number;
        villageId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        tehsilId: number;
        stateId: number;
        mccName: string;
        mccCode: string;
        districtId: number;
        villageId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
    }>;
    issueSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        title: import("zod").ZodString;
        severity: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        categoryId: import("zod").ZodNumber;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        categoryId: number;
        title: string;
        severity: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }, {
        categoryId: number;
        title: string;
        severity: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }>;
    defectiveSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        itemName: import("zod").ZodString;
        serialNumber: import("zod").ZodString;
        location: import("zod").ZodString;
        issueDescription: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        categoryId: import("zod").ZodNumber;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        itemName: string;
        serialNumber: string;
        location: string;
        categoryId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        issueDescription?: string | null | undefined;
    }, {
        itemName: string;
        serialNumber: string;
        location: string;
        categoryId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        issueDescription?: string | null | undefined;
    }>;
    customerSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        companyName: import("zod").ZodString;
        email: import("zod").ZodString;
        phoneNumber: import("zod").ZodString;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        industry: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        status: "ACTIVE" | "INACTIVE";
        companyName: string;
        phoneNumber: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        address?: string | null | undefined;
        industry?: string | null | undefined;
    }, {
        email: string;
        companyName: string;
        phoneNumber: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
        address?: string | null | undefined;
        industry?: string | null | undefined;
    }>;
    PhysicalStatus: import("zod").ZodEnum<["NEW", "GOOD", "UNDER_MAINTENANCE", "DAMAGED", "RETIRED", "OLD"]>;
    MaintenanceType: import("zod").ZodEnum<["NONE", "MONTHLY", "QUARTERLY", "YEARLY", "HALF_YEARLY"]>;
    assetSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        assetName: import("zod").ZodString;
        assetCode: import("zod").ZodString;
        assetDescription: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        make: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        fileId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        acquisitionDate: import("zod").ZodUnion<[import("zod").ZodDate, import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodDate>]>;
        retireDate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodDate, import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodDate>]>>>;
        depreciationRate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        voucherDate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodDate, import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodDate>]>>>;
        voucherNumber: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        invoiceDate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodDate, import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodDate>]>>>;
        invoiceNumber: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        poDate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodDate, import("zod").ZodPipeline<import("zod").ZodString, import("zod").ZodDate>]>>>;
        poNumber: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        physicalStatus: import("zod").ZodDefault<import("zod").ZodEnum<["NEW", "GOOD", "UNDER_MAINTENANCE", "DAMAGED", "RETIRED", "OLD"]>>;
        calibration_maintenance: import("zod").ZodDefault<import("zod").ZodEnum<["NONE", "MONTHLY", "QUARTERLY", "YEARLY", "HALF_YEARLY"]>>;
        preventive_maintenance: import("zod").ZodDefault<import("zod").ZodEnum<["NONE", "MONTHLY", "QUARTERLY", "YEARLY", "HALF_YEARLY"]>>;
        categoryId: import("zod").ZodNumber;
        subCategoryId: import("zod").ZodNumber;
        vendorId: import("zod").ZodNumber;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        status: "ACTIVE" | "INACTIVE";
        categoryId: number;
        assetName: string;
        assetCode: string;
        acquisitionDate: Date;
        physicalStatus: "NEW" | "GOOD" | "UNDER_MAINTENANCE" | "DAMAGED" | "RETIRED" | "OLD";
        calibration_maintenance: "NONE" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "HALF_YEARLY";
        preventive_maintenance: "NONE" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "HALF_YEARLY";
        subCategoryId: number;
        vendorId: number;
        id?: number | undefined;
        fileId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        assetDescription?: string | null | undefined;
        make?: string | null | undefined;
        retireDate?: Date | null | undefined;
        depreciationRate?: string | null | undefined;
        voucherDate?: Date | null | undefined;
        voucherNumber?: string | null | undefined;
        invoiceDate?: Date | null | undefined;
        invoiceNumber?: string | null | undefined;
        poDate?: Date | null | undefined;
        poNumber?: string | null | undefined;
    }, {
        categoryId: number;
        assetName: string;
        assetCode: string;
        acquisitionDate: string | Date;
        subCategoryId: number;
        vendorId: number;
        id?: number | undefined;
        fileId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
        assetDescription?: string | null | undefined;
        make?: string | null | undefined;
        retireDate?: string | Date | null | undefined;
        depreciationRate?: string | null | undefined;
        voucherDate?: string | Date | null | undefined;
        voucherNumber?: string | null | undefined;
        invoiceDate?: string | Date | null | undefined;
        invoiceNumber?: string | null | undefined;
        poDate?: string | Date | null | undefined;
        poNumber?: string | null | undefined;
        physicalStatus?: "NEW" | "GOOD" | "UNDER_MAINTENANCE" | "DAMAGED" | "RETIRED" | "OLD" | undefined;
        calibration_maintenance?: "NONE" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "HALF_YEARLY" | undefined;
        preventive_maintenance?: "NONE" | "MONTHLY" | "QUARTERLY" | "YEARLY" | "HALF_YEARLY" | undefined;
    }>;
    VendorStatus: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
    vendorSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        vendor_name: import("zod").ZodString;
        category_id: import("zod").ZodNumber;
        contact_number: import("zod").ZodNullable<import("zod").ZodString>;
        email_address: import("zod").ZodNullable<import("zod").ZodString>;
        address: import("zod").ZodNullable<import("zod").ZodString>;
        gst_number: import("zod").ZodNullable<import("zod").ZodString>;
        pan_number: import("zod").ZodNullable<import("zod").ZodString>;
        created_at: import("zod").ZodDate;
        updated_at: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        vendor_name: string;
        category_id: number;
        contact_number: string | null;
        email_address: string | null;
        address: string | null;
        gst_number: string | null;
        pan_number: string | null;
        created_at: Date;
        updated_at: Date;
    }, {
        id: number;
        vendor_name: string;
        category_id: number;
        contact_number: string | null;
        email_address: string | null;
        address: string | null;
        gst_number: string | null;
        pan_number: string | null;
        created_at: Date;
        updated_at: Date;
    }>;
    roleSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }, {
        name: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }>;
    permissionSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        action: import("zod").ZodArray<import("zod").ZodString, "many">;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        action: string[];
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        action: string[];
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>;
    moduleSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        Name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        Name: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }, {
        Name: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }>;
    stateSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        code: import("zod").ZodNullable<import("zod").ZodString>;
        status: import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        status: "ACTIVE" | "INACTIVE";
    }, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        status: "ACTIVE" | "INACTIVE";
    }>;
    districtSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        stateId: import("zod").ZodNumber;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        status: "ACTIVE" | "INACTIVE";
        stateId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        stateId: number;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
    }>;
    tehsilSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        status: import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>;
        districtId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: "ACTIVE" | "INACTIVE";
        districtId: number;
    }, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: "ACTIVE" | "INACTIVE";
        districtId: number;
    }>;
    villageSchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        pincode: import("zod").ZodNullable<import("zod").ZodString>;
        status: import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>;
        tehsilId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: "ACTIVE" | "INACTIVE";
        pincode: string | null;
        tehsilId: number;
    }, {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: "ACTIVE" | "INACTIVE";
        pincode: string | null;
        tehsilId: number;
    }>;
    subCategorySchema: import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        description: import("zod").ZodNullable<import("zod").ZodString>;
        fileId: import("zod").ZodNullable<import("zod").ZodNumber>;
        categoryId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        fileId: number | null;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        categoryId: number;
    }, {
        id: number;
        name: string;
        fileId: number | null;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        categoryId: number;
    }>;
    Status: import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>;
    TicketStatus: import("zod").ZodEnum<["OPEN", "INPROGRESS", "PENDING", "RESOLVED"]>;
    Priority: import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH", "CRITICAL"]>;
    categorySchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        status: import("zod").ZodDefault<import("zod").ZodEnum<["ACTIVE", "INACTIVE"]>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        status: "ACTIVE" | "INACTIVE";
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        description?: string | null | undefined;
    }, {
        name: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
        description?: string | null | undefined;
    }>;
    fileSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        filename: import("zod").ZodString;
        originalName: import("zod").ZodString;
        mimeType: import("zod").ZodString;
        size: import("zod").ZodNumber;
        filePath: import("zod").ZodString;
        fileContent: import("zod").ZodAny;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        fileContent?: any;
    }, {
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        fileContent?: any;
    }>;
    otpSchema: import("zod").ZodObject<{
        email: import("zod").ZodString;
        otp: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        otp: string;
    }, {
        email: string;
        otp: string;
    }>;
    sendEmailSchema: import("zod").ZodObject<{
        to: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>;
        subject: import("zod").ZodString;
        text: import("zod").ZodOptional<import("zod").ZodString>;
        html: import("zod").ZodOptional<import("zod").ZodString>;
        bcc: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        to: string | string[];
        subject: string;
        text?: string | undefined;
        html?: string | undefined;
        bcc?: string | string[] | undefined;
    }, {
        to: string | string[];
        subject: string;
        text?: string | undefined;
        html?: string | undefined;
        bcc?: string | string[] | undefined;
    }>;
    userSchema: import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        emailVerified: import("zod").ZodDefault<import("zod").ZodBoolean>;
        password: import("zod").ZodString;
        fileId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        original_password: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        mobileNumber: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        roleId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        provider: import("zod").ZodDefault<import("zod").ZodEnum<["credentials", "google"]>>;
        createdAt: import("zod").ZodOptional<import("zod").ZodDate>;
        updatedAt: import("zod").ZodOptional<import("zod").ZodDate>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        email: string;
        emailVerified: boolean;
        password: string;
        provider: "credentials" | "google";
        id?: number | undefined;
        fileId?: number | null | undefined;
        original_password?: string | null | undefined;
        mobileNumber?: string | null | undefined;
        roleId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        id?: number | undefined;
        emailVerified?: boolean | undefined;
        fileId?: number | null | undefined;
        original_password?: string | null | undefined;
        mobileNumber?: string | null | undefined;
        roleId?: number | null | undefined;
        provider?: "credentials" | "google" | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>;
    userRegisterSchema: import("zod").ZodObject<{
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        password: import("zod").ZodString;
        mobileNumber: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        mobileNumber?: string | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        mobileNumber?: string | undefined;
    }>;
    userLoginSchema: import("zod").ZodObject<{
        email: import("zod").ZodString;
        password: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
};
//# sourceMappingURL=index.d.ts.map
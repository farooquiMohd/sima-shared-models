/*
  Warnings:

  - You are about to drop the `Asset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Defective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `District` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Issue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MCC` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MPP` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `State` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tehsil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vendor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Village` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_vendorId_fkey";

-- DropForeignKey
ALTER TABLE "Defective" DROP CONSTRAINT "Defective_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_stateId_fkey";

-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "MCC" DROP CONSTRAINT "MCC_districtId_fkey";

-- DropForeignKey
ALTER TABLE "MCC" DROP CONSTRAINT "MCC_stateId_fkey";

-- DropForeignKey
ALTER TABLE "MCC" DROP CONSTRAINT "MCC_tehsilId_fkey";

-- DropForeignKey
ALTER TABLE "MCC" DROP CONSTRAINT "MCC_villageId_fkey";

-- DropForeignKey
ALTER TABLE "MPP" DROP CONSTRAINT "MPP_districtId_fkey";

-- DropForeignKey
ALTER TABLE "MPP" DROP CONSTRAINT "MPP_mccId_fkey";

-- DropForeignKey
ALTER TABLE "MPP" DROP CONSTRAINT "MPP_stateId_fkey";

-- DropForeignKey
ALTER TABLE "MPP" DROP CONSTRAINT "MPP_tehsilId_fkey";

-- DropForeignKey
ALTER TABLE "MPP" DROP CONSTRAINT "MPP_villageId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Tehsil" DROP CONSTRAINT "Tehsil_districtId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_customerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fileId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Village" DROP CONSTRAINT "Village_tehsilId_fkey";

-- DropForeignKey
ALTER TABLE "_PermissionModules" DROP CONSTRAINT "_PermissionModules_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermissionModules" DROP CONSTRAINT "_PermissionModules_B_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermissions" DROP CONSTRAINT "_RolePermissions_A_fkey";

-- DropForeignKey
ALTER TABLE "_RolePermissions" DROP CONSTRAINT "_RolePermissions_B_fkey";

-- DropTable
DROP TABLE "Asset";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Defective";

-- DropTable
DROP TABLE "District";

-- DropTable
DROP TABLE "File";

-- DropTable
DROP TABLE "Issue";

-- DropTable
DROP TABLE "MCC";

-- DropTable
DROP TABLE "MPP";

-- DropTable
DROP TABLE "Module";

-- DropTable
DROP TABLE "Permission";

-- DropTable
DROP TABLE "Request";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "State";

-- DropTable
DROP TABLE "SubCategory";

-- DropTable
DROP TABLE "Tehsil";

-- DropTable
DROP TABLE "Ticket";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Vendor";

-- DropTable
DROP TABLE "Village";

-- CreateTable
CREATE TABLE "assets" (
    "id" SERIAL NOT NULL,
    "assetName" TEXT NOT NULL,
    "assetCode" TEXT NOT NULL,
    "assetDescription" TEXT,
    "make" TEXT,
    "fileId" INTEGER,
    "acquisitionDate" TIMESTAMP(3) NOT NULL,
    "retireDate" TIMESTAMP(3),
    "depreciationRate" TEXT,
    "voucherDate" TIMESTAMP(3),
    "voucherNumber" TEXT,
    "invoiceDate" TIMESTAMP(3),
    "invoiceNumber" TEXT,
    "poDate" TIMESTAMP(3),
    "poNumber" TEXT,
    "physicalStatus" "PhysicalStatus" NOT NULL DEFAULT 'GOOD',
    "calibration_maintenance" "MaintenanceType" NOT NULL DEFAULT 'NONE',
    "preventive_maintenance" "MaintenanceType" NOT NULL DEFAULT 'NONE',
    "categoryId" INTEGER NOT NULL,
    "subCategoryId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "industry" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "defectives" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "issueDescription" TEXT,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "defectives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "stateId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileContent" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issues" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "description" TEXT,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mccs" (
    "id" SERIAL NOT NULL,
    "mccName" TEXT NOT NULL,
    "mccCode" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "tehsilId" INTEGER NOT NULL,
    "villageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mccs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modules" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mpps" (
    "id" SERIAL NOT NULL,
    "mppName" TEXT NOT NULL,
    "mppCode" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "mccId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "tehsilId" INTEGER NOT NULL,
    "villageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mpps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" SERIAL NOT NULL,
    "action" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "serviceCategory" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "fileId" INTEGER,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tehsils" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "districtId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tehsils_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "TicketStatus" NOT NULL DEFAULT 'OPEN',
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "customerId" INTEGER NOT NULL,
    "assigneeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "fileId" INTEGER,
    "original_password" TEXT,
    "mobileNumber" TEXT,
    "roleId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "provider" "Provider" NOT NULL DEFAULT 'credentials',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendors" (
    "id" SERIAL NOT NULL,
    "vendor_name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "contact_number" TEXT,
    "email_address" TEXT,
    "address" TEXT,
    "gst_number" TEXT,
    "pan_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vendors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "villages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pincode" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "tehsilId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "villages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "assets_assetCode_key" ON "assets"("assetCode");

-- CreateIndex
CREATE INDEX "assets_categoryId_subCategoryId_idx" ON "assets"("categoryId", "subCategoryId");

-- CreateIndex
CREATE INDEX "assets_vendorId_idx" ON "assets"("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "districts_name_stateId_key" ON "districts"("name", "stateId");

-- CreateIndex
CREATE UNIQUE INDEX "mccs_mccCode_key" ON "mccs"("mccCode");

-- CreateIndex
CREATE INDEX "mccs_stateId_districtId_tehsilId_villageId_idx" ON "mccs"("stateId", "districtId", "tehsilId", "villageId");

-- CreateIndex
CREATE UNIQUE INDEX "mpps_mppCode_key" ON "mpps"("mppCode");

-- CreateIndex
CREATE INDEX "mpps_mccId_idx" ON "mpps"("mccId");

-- CreateIndex
CREATE INDEX "mpps_stateId_districtId_tehsilId_villageId_idx" ON "mpps"("stateId", "districtId", "tehsilId", "villageId");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "states_name_key" ON "states"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tehsils_name_districtId_key" ON "tehsils"("name", "districtId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "villages_name_tehsilId_key" ON "villages"("name", "tehsilId");

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "sub_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assets" ADD CONSTRAINT "assets_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "defectives" ADD CONSTRAINT "defectives_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issues" ADD CONSTRAINT "issues_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mccs" ADD CONSTRAINT "mccs_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mccs" ADD CONSTRAINT "mccs_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mccs" ADD CONSTRAINT "mccs_tehsilId_fkey" FOREIGN KEY ("tehsilId") REFERENCES "tehsils"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mccs" ADD CONSTRAINT "mccs_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "villages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mpps" ADD CONSTRAINT "mpps_mccId_fkey" FOREIGN KEY ("mccId") REFERENCES "mccs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mpps" ADD CONSTRAINT "mpps_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mpps" ADD CONSTRAINT "mpps_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mpps" ADD CONSTRAINT "mpps_tehsilId_fkey" FOREIGN KEY ("tehsilId") REFERENCES "tehsils"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mpps" ADD CONSTRAINT "mpps_villageId_fkey" FOREIGN KEY ("villageId") REFERENCES "villages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_categories" ADD CONSTRAINT "sub_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_categories" ADD CONSTRAINT "sub_categories_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tehsils" ADD CONSTRAINT "tehsils_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendors" ADD CONSTRAINT "vendors_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "villages" ADD CONSTRAINT "villages_tehsilId_fkey" FOREIGN KEY ("tehsilId") REFERENCES "tehsils"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionModules" ADD CONSTRAINT "_PermissionModules_A_fkey" FOREIGN KEY ("A") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionModules" ADD CONSTRAINT "_PermissionModules_B_fkey" FOREIGN KEY ("B") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolePermissions" ADD CONSTRAINT "_RolePermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolePermissions" ADD CONSTRAINT "_RolePermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

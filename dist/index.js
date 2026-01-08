"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.allModels = void 0;
var prisma_1 = require("./config/prisma");
exports.prisma = prisma_1.default;
__exportStar(require("./schema/user"), exports);
__exportStar(require("./schema/mail"), exports);
__exportStar(require("./schema/otp"), exports);
__exportStar(require("./schema/file"), exports);
__exportStar(require("./schema/category"), exports);
__exportStar(require("./schema/modules"), exports);
__exportStar(require("./schema/permission"), exports);
__exportStar(require("./schema/role"), exports);
__exportStar(require("./schema/vendor"), exports);
__exportStar(require("./schema/village"), exports);
__exportStar(require("./schema/district"), exports);
__exportStar(require("./schema/defective"), exports);
__exportStar(require("./schema/issue"), exports);
__exportStar(require("./schema/mcc"), exports);
__exportStar(require("./schema/mpp"), exports);
__exportStar(require("./schema/request"), exports);
__exportStar(require("./schema/state"), exports);
__exportStar(require("./schema/tehsil"), exports);
__exportStar(require("./schema/customer"), exports);
__exportStar(require("./schema/services"), exports);
__exportStar(require("./schema/subcategory"), exports);
__exportStar(require("./schema/asset"), exports);
__exportStar(require("./schema/tickets"), exports); // Added
var schema_1 = require("./schema");
Object.defineProperty(exports, "allModels", { enumerable: true, get: function () { return schema_1.allModels; } });
__exportStar(require("./lib/tools"), exports);
__exportStar(require("./lib/env"), exports);
exports.default = prisma_1.default;

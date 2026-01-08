"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.allModels = void 0;
var user = require("./user");
var mail = require("./mail");
var otp = require("./otp");
var file = require("./file");
var category = require("./category");
var subCategory = require("./subcategory");
var village = require("./village");
var tehsil = require("./tehsil");
var district = require("./district");
var state = require("./state");
var modules = require("./modules");
var permission = require("./permission");
var role = require("./role");
var vendor = require("./vendor");
var asset = require("./asset");
var customer = require("./customer");
var defective = require("./defective");
var issue = require("./issue");
var mcc = require("./mcc");
var mpp = require("./mpp");
var request = require("./request");
var service = require("./services");
var ticket = require("./tickets");
var enums = require("./enums");
__exportStar(require("./user"), exports);
__exportStar(require("./mail"), exports);
__exportStar(require("./otp"), exports);
__exportStar(require("./file"), exports);
__exportStar(require("./category"), exports);
__exportStar(require("./subcategory"), exports);
__exportStar(require("./village"), exports);
__exportStar(require("./tehsil"), exports);
__exportStar(require("./district"), exports);
__exportStar(require("./state"), exports);
__exportStar(require("./modules"), exports);
__exportStar(require("./permission"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./vendor"), exports);
__exportStar(require("./asset"), exports);
__exportStar(require("./customer"), exports);
__exportStar(require("./defective"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./mcc"), exports);
__exportStar(require("./mpp"), exports);
__exportStar(require("./request"), exports);
__exportStar(require("./services"), exports);
__exportStar(require("./tickets"), exports);
__exportStar(require("./enums"), exports);
exports.allModels = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, user), mail), otp), file), category), subCategory), village), tehsil), district), state), modules), permission), role), vendor), asset), customer), defective), issue), mcc), mpp), request), service), ticket), enums);

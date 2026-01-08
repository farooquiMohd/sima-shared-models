"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.loadEnv = loadEnv;
// Type-safe environment loader with validation
function loadEnv() {
    var requiredEnvs = ['DATABASE_URL', 'PORT'];
    // Check for missing environment variables
    var missingEnvs = requiredEnvs.filter(function (env) { return !process.env[env]; });
    if (missingEnvs.length > 0) {
        throw new Error("Missing required environment variables: ".concat(missingEnvs.join(', ')));
    }
    return {
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: process.env.PORT,
    };
}
// Option 2: Global env instance
exports.env = loadEnv();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../generated/client/client");
var adapter_pg_1 = require("@prisma/adapter-pg");
var adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
var prisma = new client_1.PrismaClient({ adapter: adapter });
exports.default = prisma;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
    }
    : process.env.NODE_ENV === "development"
        ? {
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: 5432,
            database: process.env.POSTGRES_DB,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            logging: true,
            synchronize: false,
            entities: ["dist/entities/*.ts"],
            migrations: ["dist/migrations/*.ts"],
        }
        : {
            type: "postgres",
            ssl: process.env.NODE_ENV === "production"
                ? { rejectUnauthorized: false }
                : false,
            logging: true,
            synchronize: false,
            entities: process.env.NODE_ENV === "production"
                ? ["dist/src/entities/*.js"]
                : ["src/entities/*.ts"],
            migrations: process.env.NODE_ENV === "production"
                ? ["dist/src/migrations/*.js"]
                : ["src/migrations/*.ts"],
        });
exports.default = AppDataSource;

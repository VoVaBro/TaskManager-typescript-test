"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Postgresqlpassword66',
    database: 'todo',
    port: 5432
});
//# sourceMappingURL=database.js.map
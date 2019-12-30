import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Postgresqlpassword66',
    database: 'todo',
    port: 5432
})
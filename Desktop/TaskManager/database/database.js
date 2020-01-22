const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Postgresqlpassword66',
    database: 'tasks',
    port: 5432
})

module.exports = pool;
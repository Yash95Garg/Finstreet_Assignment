const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Yash@0601",
    database: "wazirx",
    host: "localhost",
    port: 5432
});

module.exports = pool;
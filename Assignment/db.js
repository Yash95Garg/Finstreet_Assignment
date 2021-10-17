const Pool = require("pg").Pool;
const config = require('./config');
const pool = new Pool(config.db);

//const pool = new Pool({
//    user: "postgres",
//    password: "password",
//    database: "wazirx",
    // host: "localhost",
    // port: 5432
// });

module.exports = pool;
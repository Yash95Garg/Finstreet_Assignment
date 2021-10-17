const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'fanny.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'unomnnvd',
    password: env.DB_PASSWORD || '4WNk8Ff9sfRL2uooLppCo187s25VolZ2',
    database: env.DB_NAME || 'unomnnvd',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
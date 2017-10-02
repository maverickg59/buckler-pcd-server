// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/test-database'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};

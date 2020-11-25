module.exports = {
  database: 'postgres_test',
  username: 'username',
  password: 'pgpassword',
  params: {
    dialect: 'postgres',
    define: {
      underscored: true
    },
    host: 'postgres',
    port: '5432'
  }
};
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASS,
  params: {
    dialect: 'postgres',
    define: {
      underscored: true
    },
    host: process.env.POSTGRES_HOST,
  }
};
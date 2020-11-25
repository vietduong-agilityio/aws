const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  cognito: {
    REGION: process.env.AWS_REGION,
    USER_POOL_ID: process.env.AWS_USER_POOL_ID,
    APP_CLIENT_ID: process.env.AWS_APP_CLIENT_ID
  }
};
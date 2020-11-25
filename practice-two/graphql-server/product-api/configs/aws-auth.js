const Amplify = require('@aws-amplify/core');
const config = require('./aws-config');
const Auth = require('@aws-amplify/auth');

Amplify.default.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

module.exports = Auth.default;
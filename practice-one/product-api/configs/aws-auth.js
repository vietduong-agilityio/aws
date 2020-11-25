import Amplify from '@aws-amplify/core';
import config from './aws-config';
import Auth from '@aws-amplify/auth';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

export default Auth;
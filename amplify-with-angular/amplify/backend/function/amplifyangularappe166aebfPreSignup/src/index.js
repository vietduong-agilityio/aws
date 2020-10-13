/* Amplify Params - DO NOT EDIT
	API_AMPLIFYANGULARAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYANGULARAPI_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYANGULARAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/

var aws = require('aws-sdk');
aws.config.update({
  region: "us-east-2"
});

var ddb = new aws.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event, context) => {
  const currentTime = new Date().toISOString().toString();

  // -- Write data to DDB
  let ddbParams = {
    TableName: `Users-${process.env.API_AMPLIFYANGULARAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
    Item: {
      'userId': {S: event.userName},
      'email': {S: event.request.userAttributes.email},
      'phone': {S: event.request.userAttributes.phone_number},
      'createdAt': {S: currentTime},
      'updatedAt': {S: currentTime}
    }
  };

  // Call DynamoDB
  try {
    await ddb.putItem(ddbParams).promise()
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }

  console.log("Success: Everything executed correctly");
  context.done(null, event);
}

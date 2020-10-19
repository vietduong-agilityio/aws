var AWS = require('aws-sdk');
AWS.config.update({
  region: "us-east-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  const tableName = `Room-${process.env.API_AMPLIFYANGULARAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

  var queryParams = {
    TableName: tableName,
    KeyConditionExpression: "buildingId = :buildingId",
    ExpressionAttributeValues: {
      ":buildingId": event.buildingId
    }
  };

  docClient.query(queryParams, function(err, data){
    if (err) {
      callback(err, null);
    } else {
      const deleteList = [];
        data.Items.forEach(function(item) {
          const deleteItem = {
            DeleteRequest: {
              Key: {
                'buildingId': item.buildingId,
                'roomId': item.roomId
              }
            }
          };
          deleteList.push(deleteItem);
        });

      if (deleteList.length) {
        const deleteParams = {
          RequestItems: {}
        };

        deleteParams.RequestItems[tableName] = deleteList

        docClient.batchWrite(deleteParams, function(err, data) {
          if (err) {
            callback(err, null)
          } else {
            callback(null, data)
          }
        })
      }
    }
  });
};
const AWS = require("aws-sdk");
  AWS.config.update({
    region: "us-east-2"
  });

  var docClient = new AWS.DynamoDB.DocumentClient();

  const queryFunction = (event, callback, params, items = []) => {
    docClient.query(params, function(err, data) {
      if (err) {
        callback(err, null);
      } else {
        items = items.concat(data.Items);

        if (data.LastEvaluatedKey) {
          params.ExclusiveStartKey = data.LastEvaluatedKey;
          queryFunction(event, callback, params);
        } else {
          data.Items = items;
          callback(null, data);
        }
      }
    })
  }

  exports.handler = (event, context, callback) => {
    var params = {
      TableName: `Booking-${process.env.API_AMPLIFYANGULARAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
      IndexName: "roomBooking",
      KeyConditionExpression: "roomId = :roomId AND (endTime > :startTime)",
      FilterExpression: "startTime < :endTime",
      ExpressionAttributeValues: {
        ":roomId": event.roomId,
        ":startTime": event.startTime,
        ":endTime": event.endTime
      }
    }
    queryFunction(event, callback, params);
  };
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
      const roomIdList = [];
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

          roomIdList.push(item.roomId);
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
            roomIdList.forEach(id => {
              deleteBookingFollowRoom(id, callback);
            });
          }
        })
      }
    }
  });
};

const deleteBookingFollowRoom = (roomId, callback) => {
  const bookingTableName = `Booking-${process.env.API_AMPLIFYANGULARAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

  var bookingQueryParams = {
    TableName: bookingTableName,
    KeyConditionExpression: "roomId = :roomId",
    IndexName: "roomBooking",
    ExpressionAttributeValues: {
      ":roomId": roomId
    }
  }

  docClient.query(bookingQueryParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const bookingDeleteList = [];
      data.Items.forEach(item => {
        console.log('items', item)
        const bookingDeleteItem = {
          DeleteRequest: {
            Key: {
              'userId': item.userId,
              'bookingId': item.bookingId
            }
          }
        };

        bookingDeleteList.push(bookingDeleteItem);
      });

      if (bookingDeleteList.length) {
        const bookingDeleteParams = {
          RequestItems: {}
        }

        bookingDeleteParams.RequestItems[bookingTableName] = bookingDeleteList;

        docClient.batchWrite(bookingDeleteParams, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        })
      }
    }
  })
}
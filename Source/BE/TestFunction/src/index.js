const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
exports.handler = async function (event)  {
    var data = await dynamo.scan({ TableName: "test" }).promise();
    const response = {
        statusCode: 200,
        body: data,
    };
    return response;
};

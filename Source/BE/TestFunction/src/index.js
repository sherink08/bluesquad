const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
exports.handler = async function (event)  {
    var data = await scanData();
    const response = {
        statusCode: 200,
        body: data,
    };
    return response;
};
async function scanData()
{
    return await dynamo.scan({ TableName: "test" }).promise();
}
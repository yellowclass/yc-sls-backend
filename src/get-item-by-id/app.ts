import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
// Create clients and set shared const values outside of the handler.

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
export const getItemByIdHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
    const id = event?.pathParameters?.id;

    const items = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
    ];

    const response = {
        statusCode: 200,
        body: JSON.stringify(items.find((x) => x.id.toString() === id)),
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);

    return response;
};

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { addNos } from '/opt/nodejs/commonHelpers';
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const helloWorldHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const xx = addNos(2, 3);
    let response: APIGatewayProxyResult;

    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `hello world${xx}-${yy}`,
            }),
        };
    } catch (err: unknown) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }

    return response;
};

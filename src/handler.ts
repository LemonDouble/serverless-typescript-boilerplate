import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

const secret = process.env.SOME_SECRET_VALUE;

export const handle = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  const response = { message: `OK. Secret Is ${secret}` };
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(response),
  };
};

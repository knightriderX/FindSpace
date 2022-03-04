import { v4 } from 'uuid'
import { S3 } from 'aws-sdk'
import { JsonFileLogDriver } from 'aws-cdk-lib/aws-ecs';

const s3client = new S3();


async function handler(event: any, context: any) {

    const buckets = await s3client.listBuckets().promise();

    console.log('Got an event');
    console.log(event);
    return {
        statusCode: 200,
        body: 'Here are your buckets:' + JSON.stringify(buckets.Buckets)

    }
}



export { handler }
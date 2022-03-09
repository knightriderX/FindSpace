import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Create';
// import { handler } from '../../services/SpacesTable/Read';
// import { handler } from '../../services/SpacesTable/Update';
// import { handler } from '../../services/SpacesTable/Delete';

const event: APIGatewayProxyEvent = {
    body: {
        name: 'someName',
        location: 'somelocation'

    }
} as any;



const result = handler(event, {} as any).then((apiresult) => {
    const items = JSON.parse(apiresult.body);
    console.log(123)
    // console.log(items)
});

// const event_delete: APIGatewayProxyEvent = {
//     queryStringParameters: {
//         spaceId: 'c056b45f-37f4-4b6e-8ac5-4627f573a191'
//     }
// } as any;
// const event_update: APIGatewayProxyEvent = {
//     queryStringParameters: {
//         spaceId: 'c056b45f-37f4-4b6e-8ac5-4627f573a191'
//     },
//     body: {
//         location: 'new location'
//     }
// } as any;

// const event_old = {
//     body: {
//         location: 'Paris'
//     }
// }

// const event: APIGatewayProxyEvent = {
//     queryStringParameters: {
//         spaceId: 'ad099c86-e762-424b-8eba-ebe5c732cbd6'
//     }
// } as any;

// const eventLocation: APIGatewayProxyEvent = {
//     queryStringParameters: {
//         location: 'London'
//     }
// } as any;
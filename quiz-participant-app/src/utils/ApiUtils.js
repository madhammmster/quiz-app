import axios from 'axios';


const server = 'http://localhost:8086/'

export const get = (endPoint, thenAction) => {
    axios.get(server + endPoint)
        .then((result) => {
            thenAction(result.data)
        });
}

export const post = (endPoint, data, thenAction) => {
    axios.post(server + endPoint, data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
    })
        .then((result) => {
            thenAction(result.data)
        });
}
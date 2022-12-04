import axios from "axios";


async function baseRequest({ urlPath = '', method = 'GET'}){
    let props = {
        method: method,
        url: 'http://127.0.0.1:5000/' + urlPath,
        
    }
    return axios(props);
}

export async function getAnimals(sortBy, sortOrder){
        return await baseRequest({urlPath: `/${sortBy}/${sortOrder}`})
}
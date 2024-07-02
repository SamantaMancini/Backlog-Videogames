import axios from 'axios'


const client = axios.create({ baseURL: 'http://localhost:3000'});

const makeRequest = (service, options) => {
  
  const onSuccess = (response) => response;
  const onError = (error) => {
    return Promise.reject(error);
  };

  return service(options).then(onSuccess).catch(onError);
};

export const request = (options) => makeRequest(client, options);
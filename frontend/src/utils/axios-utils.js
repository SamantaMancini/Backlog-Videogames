import axios from 'axios'


const client = axios.create({ baseURL: import.meta.env.VITE_APP_BACKEND});

const makeRequest = (service, options) => {
  
  const onSuccess = (response) => response;
  const onError = (error) => {
    return Promise.reject(error);
  };

  return service(options).then(onSuccess).catch(onError);
};

export const request = (options) => makeRequest(client, options);
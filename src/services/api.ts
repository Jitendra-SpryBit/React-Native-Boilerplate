import config from '../config';

const defaultHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

const API = {
  get: (endpoint: string, queryParam: any) => {
    return fetch(queryParam ? config.apis.baseUrl + endpoint + queryParam : endpoint, {
      method: "GET",
      headers: defaultHeaders(),
    })
  },
  post: (endpoint: string, queryParam: any) => {
    return fetch(config.apis.baseUrl + endpoint, {
      method: "POST",
      body: JSON.stringify(queryParam),
      headers: defaultHeaders(),
    })
  },
  put: (endpoint: string, queryParam: any, showLoader: (b: boolean) => void, callback: (result: any) => void) => {
    showLoader(true);
    fetch(config.apis.baseUrl + endpoint, {
      method: "PUT",
      body: JSON.stringify(queryParam),
      headers: defaultHeaders(),
    }).then((responseData: any) => {
      showLoader(false);
      callback && callback(responseData);
    }).catch((error) => {
      showLoader(false);
      console.log(JSON.stringify(error));
    })
  },
  patch: (endpoint: string, queryParam: any, showLoader: (b: boolean) => void, callback: (result: any) => void) => {
    showLoader(true);
    fetch(config.apis.baseUrl + endpoint, {
      method: "PATCH",
      body: JSON.stringify(queryParam),
      headers: defaultHeaders(),
    }).then((responseData: any) => {
      showLoader(false);
      callback && callback(responseData);
    }).catch((error) => {
      showLoader(false);
      console.log(JSON.stringify(error));
    })
  },
  delete: (endpoint: string, queryParam: any, showLoader: (b: boolean) => void, callback: (result: any) => void) => {
    showLoader(true);
    fetch(config.apis.baseUrl + endpoint, {
      method: "DELETE",
      body: JSON.stringify(queryParam),
      headers: defaultHeaders(),
    }).then((responseData: any) => {
      showLoader(false);
      callback && callback(responseData);
    }).catch((error) => {
      showLoader(false);
      console.log(JSON.stringify(error));
    })
  },
};

export default API;

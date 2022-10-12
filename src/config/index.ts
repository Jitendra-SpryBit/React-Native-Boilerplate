const base = '/api';
const domain = 'reqres.in';
const DEFAULTS = {
  apis: {
    //app base url
    baseUrl: `https://${domain}`,
    //app api end point
    login: `${base}/login`,
    register: `${base}/register`,
    userList: `${base}/users`,
  },
};

export default DEFAULTS;

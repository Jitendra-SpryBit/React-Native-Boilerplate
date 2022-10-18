/* Add All Action constants here  */

const ACTION_TYPES = {
   // Login Screen Actions
   SPLASH: {
    SPLASH_LAUNCHED: 'SPLASH_LAUNCHED',
  },  
   // App  Actions
   APP: {
    APP_LOADING: 'APP_LOADING',
    NETWORK: 'IS_NETWORK_AVAILABLE',
  },  
  // Login Screen Actions
    LOGIN: {
      LOGIN_DATA_FETCHED: 'LOGIN_DATA_FETCHED',
      LOGIN_SUCCESS: 'LOGIN_SUCCESS',
      LOGIN_FAILED: 'LOGIN_FAILED',
    },
    // Login Screen Actions
    HOME: {
      USER_LIST_FETCHED: 'USER_LIST_FETCHED',
      USER_LIST_FAILED: 'USER_LIST_FAILED',

      JOKES_RANDOM_FETCHED: 'JOKES_RANDOM_FETCHED',
      JOKES_RANDOM_FAILED: 'JOKES_RANDOM_FAILED',
    },
  };
  
  export { ACTION_TYPES };
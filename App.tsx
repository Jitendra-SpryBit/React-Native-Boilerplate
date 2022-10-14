import React from 'react';
//@ts-ignore
import type { Node } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import StackNavigator from './src/navigation';
import Loading from './src/components/Loader';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <StackNavigator />
      <Loading />
    </Provider>
  );
};



export default App;

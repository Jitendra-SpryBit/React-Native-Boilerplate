import React from 'react';
//@ts-ignore
import type { Node } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import StackNavigator from './src/navigation';
import Loading from './src/components/Loader';
import {NetworkInfo} from './src/components';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <StackNavigator />
      <Loading />
      <NetworkInfo/>
    </Provider>
  );
};



export default App;

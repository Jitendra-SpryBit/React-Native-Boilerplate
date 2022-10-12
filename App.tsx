import React from 'react';
//@ts-ignore
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from './src/redux/store';
import StackNavigator from './src/navigation';
import CommonStyles from './src/theme/CommonStyles';

const App: () => Node = () => {

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};



export default App;

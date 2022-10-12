import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Jokes, Login, Splash, UserList,UserDetail} from '../screen';

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Login'} component={Login} />
    </AuthStack.Navigator>
  );
};

const TabStack = createBottomTabNavigator<RootStackParamList>();
const TabStackNavigator = () => {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen name={'UserList'} component={UserList} />
      <TabStack.Screen name={'Jokes'} component={Jokes} />
    </TabStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator<RootStackParamList>();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={'Tab'} component={TabStackNavigator} />
      <MainStack.Screen name={'UserDetail'} component={UserDetail} />
    </MainStack.Navigator>
  );
};

const App = () => {

  const { isAppLaunch, loggedIn } = useSelector((state: any) => state.auth);
  if (isAppLaunch) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {loggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
export default App





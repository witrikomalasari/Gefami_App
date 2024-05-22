import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Beranda from '@screens/Beranda/Beranda';
import HashingnameScreen from '@screens/Hashing_SHA256/HashingnameScreen';
import HitAPI from '@screens/HitAPI/HitAPI';
import Home from '@screens/Home/Home';
import Login from '@screens/Login/Login';
import React, {ComponentProps, Fragment} from 'react';

export type NavigatorParamList = {
  Home: undefined;
  Login: undefined;
  HitAPI: undefined;
  Beranda: undefined;
  HashingnameScreen: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="HitAPI"
        component={HitAPI}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="HashingnameScreen"
        component={HashingnameScreen}
        options={{headerShown: true}}
      />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}>
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      theme={GefamiTheme}
      {...props} //to stop navigation persistence
    >
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator';

const exitRoutes = ['Login'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const GefamiTheme = {
  ...DefaultTheme,
  DarkTheme: false,
  colors: {
    ...DefaultTheme.colors,
  },
};

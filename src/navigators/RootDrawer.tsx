import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import FibonacciScreen from '@screens/FibonacciScreen';

const Drawer = createDrawerNavigator<RootDrawerParams>();

const screenOptions: DrawerNavigationOptions = {
  headerShown: true,
};

function RootDrawer() {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="Fibonacci" component={FibonacciScreen} />
    </Drawer.Navigator>
  );
}

export default RootDrawer;

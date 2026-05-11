import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Setting from '../screens/Settings';
import Screen1 from '../screens/Screen1';
import BottomTabs from './BottomTabs';
import Users from '../screens/Users';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          title: 'Users',
        }}
      />
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'Screen1',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Setting}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

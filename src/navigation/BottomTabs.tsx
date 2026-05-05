import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';
import Settings from '../screens/Settings';
import Icon from '@react-native-vector-icons/ant-design';
import { useAppTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { theme } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor: theme.secondaryText,
        tabBarActiveBackgroundColor: theme.border,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="windows" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="setting" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

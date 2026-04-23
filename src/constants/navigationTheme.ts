import {
  DarkTheme,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

export const lightNavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f3f4f6',
    card: '#ffffff',
    primary: '#2563eb',
    text: '#111827',
    border: '#d1d5db',
  },
};

export const darkNavigationTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#111827',
    card: '#1f2937',
    primary: '#60a5fa',
    text: '#f9fafb',
    border: '#374151',
  },
};

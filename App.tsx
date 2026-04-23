import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';
import {
  darkNavigationTheme,
  lightNavigationTheme,
} from './src/constants/navigationTheme';

const AppContent = () => {
  const { isDarkMode } = useAppTheme();

  return (
    <NavigationContainer
      theme={isDarkMode ? darkNavigationTheme : lightNavigationTheme}
    >
      <RootStack />
    </NavigationContainer>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

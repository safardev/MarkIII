import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';
import {
  darkNavigationTheme,
  lightNavigationTheme,
} from './src/constants/navigationTheme';
import BootSplash from 'react-native-bootsplash';

const AppContent = () => {
  const { isDarkMode } = useAppTheme();

  return (
    <NavigationContainer
      onReady={async () => {
        await BootSplash.hide({ fade: true });
      }}
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

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext';
import {
  darkNavigationTheme,
  lightNavigationTheme,
} from './src/constants/navigationTheme';
import BootSplash from 'react-native-bootsplash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppContent = () => {
  const queryClient = new QueryClient();
  const { isDarkMode } = useAppTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        onReady={async () => {
          await BootSplash.hide({ fade: true });
        }}
        theme={isDarkMode ? darkNavigationTheme : lightNavigationTheme}
      >
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
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

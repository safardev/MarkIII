import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppThemeMode = 'light' | 'dark';

type ThemePalette = {
  background: string;
  card: string;
  text: string;
  secondaryText: string;
  border: string;
  switchThumb: string;
  switchTrackFalse: string;
  switchTrackTrue: string;
};

type ThemeContextValue = {
  isDarkMode: boolean;
  themeMode: AppThemeMode;
  theme: ThemePalette;
  setThemeMode: (mode: AppThemeMode) => Promise<void>;
  toggleTheme: () => Promise<void>;
};

const THEME_STORAGE_KEY = '@markIII/theme-mode';

const lightTheme: ThemePalette = {
  background: '#f3f4f6',
  card: '#ffffff',
  text: '#111827',
  secondaryText: '#4b5563',
  border: '#d1d5db',
  switchThumb: '#ffffff',
  switchTrackFalse: '#9ca3af',
  switchTrackTrue: '#2563eb',
};

const darkTheme: ThemePalette = {
  background: '#111827',
  card: '#1f2937',
  text: '#f9fafb',
  secondaryText: '#d1d5db',
  border: '#374151',
  switchThumb: '#f9fafb',
  switchTrackFalse: '#6b7280',
  switchTrackTrue: '#60a5fa',
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeModeState] = useState<AppThemeMode>('light');

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const storedTheme =
          await AsyncStorage.getItem(THEME_STORAGE_KEY);

        if (storedTheme === 'light' || storedTheme === 'dark') {
          setThemeModeState(storedTheme);
        }
      } catch (error) {
        console.warn('Failed to load theme preference', error);
      }
    };

    loadThemePreference();
  }, []);

  const setThemeMode = async (mode: AppThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
      setThemeModeState(mode);
    } catch (error) {
      console.warn('Failed to save theme preference', error);
    }
  };

  const toggleTheme = async () => {
    const nextTheme = themeMode === 'dark' ? 'light' : 'dark';
    await setThemeMode(nextTheme);
  };

  const value = useMemo(
    () => ({
      isDarkMode: themeMode === 'dark',
      themeMode,
      theme: themeMode === 'dark' ? darkTheme : lightTheme,
      setThemeMode,
      toggleTheme,
    }),
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider');
  }

  return context;
};

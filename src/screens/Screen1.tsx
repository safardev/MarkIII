import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppTheme } from '../context/ThemeContext';
import useDebounce from '../hooks/useDebounce';

const Screen1 = () => {
  const { theme } = useAppTheme();
  const [query, setQuery] = useState('');

  const debounceQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debounceQuery) {
      setQuery(query);
    }
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <Text style={{ color: theme.text, fontSize: 32, marginVertical: 8 }}>
          Debounce Search Query
        </Text>
        <Text style={{ color: theme.text }}>Input search: {query}</Text>
        <TextInput
          inputMode="search"
          style={{
            backgroundColor: theme.text,
            color: theme.background,
            width: 250,
            marginVertical: 20,
            borderRadius: 24,
            textAlign: 'center',
          }}
          value={query}
          onChangeText={setQuery}
        />
        <Text style={{ color: theme.text, fontSize: 16 }}>
          API hit query:
          <Text style={{ color: 'red' }}>
            {debounceQuery.length !== 0 ? ` "${debounceQuery}"` : debounceQuery}
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen1;

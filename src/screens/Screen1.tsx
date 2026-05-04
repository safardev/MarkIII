import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { useAppTheme } from '../context/ThemeContext';

const Screen1 = () => {
  const { theme } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Screen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen1;

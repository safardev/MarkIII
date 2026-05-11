import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { useAppTheme } from '../context/ThemeContext';
import User from '../components/User';

const Users = () => {
  const { theme } = useAppTheme();
  const { data, isLoading, error } = useUsers();

  if (isLoading) {
    return (
      <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
  if (error) {
    return (
      <Text
        style={{ color: 'red', alignSelf: 'center', justifyContent: 'center' }}
      >
        Something went wrong!
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.text, fontSize: 24, marginVertical: 12 }}>
        Users
      </Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <User user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Users;

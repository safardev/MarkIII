import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';
import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { useAppTheme } from '../context/ThemeContext';
import User from '../components/User';
import { useAddUser } from '../hooks/useAddUser';

const Users = () => {
  const { theme } = useAppTheme();
  const { data, isLoading, error } = useUsers();
  const { mutate } = useAddUser();

  function generateMobileNumber() {
    const min = 6000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addUser = () => {
    mutate({
      name: 'Rahul',
      email: 'email@example.com',
      phone: generateMobileNumber(),
      website: 'exmaple.com',
    });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="small" color="green" />
        <Text style={{ color: theme.text, fontSize: 16, marginTop: 8 }}>
          Loading...
        </Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'red', fontSize: 18 }}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.text, fontSize: 24, marginVertical: 12 }}>
        Users
      </Text>
      <Button onPress={addUser} title="Press to add New user"></Button>
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

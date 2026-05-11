import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

interface UserType {
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  user: UserType;
}

const screenWidth = Dimensions.get('window').width;

const User = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Name: {user.name}</Text>
      <Text>
        Email: <Text style={styles.email}>{user.email}</Text>
      </Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.8,
    padding: 16,
    backgroundColor: '#c5a9a9',
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  email: {
    color: '#ea1818',
  },
});

export default User;

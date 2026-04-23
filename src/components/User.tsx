import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface UserType {
  name: string;
  language: string;
  bio: string;
}

interface Props {
  user: UserType;
}

const User = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Name: {user.name}</Text>
      <Text>Language: <Text style={styles.language }>{user.language}</Text></Text>
      <Text>Bio: {user.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4aaaa',
    marginVertical: 6,
    marginHorizontal:8,
    borderRadius:8
  },
  language:{
    color:'#ea1818'
  }
});

export default User;

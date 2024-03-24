import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const route = useRoute();
  console.log(route.params); // Check if 'profile' is present in params

  const profile = route.params?.profile || ''; // Access 'profile' safely

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile: {profile}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

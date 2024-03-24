import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

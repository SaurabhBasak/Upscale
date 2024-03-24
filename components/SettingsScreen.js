import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const handleOpenForm = () => {
    // Navigate to the form screen where you can add multiple choice questions
    navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
        onPress={handleOpenForm}
      >
        <Text style={styles.buttonText}>Open Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonPrimary: {
    backgroundColor: 'blue',
  },
  buttonSecondary: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({ navigation}) {
  const handleOpenForm = () => {
    // Navigate to the form screen where you can add multiple choice questions
    navigation.navigate("Form");
};
  const route = useRoute();
  console.log(route.params); // Check if 'profile' is present in params

  const profile = route.params?.profile || ''; // Access 'profile' safely

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile: {profile}</Text>
      <Text>Home Screen</Text>
      
      <Text style={styles.title}>Settings Screen</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonPrimary]}
        onPress={handleOpenForm}
      >
        <Text style={styles.buttonText}>Open Form</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
},
buttonPrimary: {
    backgroundColor: "blue",
},
buttonSecondary: {
    backgroundColor: "gray",
},
buttonText: {
    color: "white",
    fontSize: 18,
},
});

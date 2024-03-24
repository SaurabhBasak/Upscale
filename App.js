import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import SettingsScreen from './components/SettingsScreen';
import TickerDetails from './components/TickerDetails';
import Navbar from './components/Navbar';
import FormScreen from './components/FormScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Details" component={TickerDetails} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => console.log('Home icon clicked')}>
        <Ionicons name="home" size={32} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Search icon clicked')}>
        <Ionicons name="search" size={32} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Settings icon clicked')}>
        <Ionicons name="settings" size={32} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    marginHorizontal: 20,
  },
});

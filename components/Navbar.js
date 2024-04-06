import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const NavBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Ionicons name="home" size={32} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Search')}>
        <Ionicons name="search" size={32} color="black" style={styles.icon} />
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

export default NavBar;

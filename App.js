import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'rocket'
                : 'anchor';
              size = focused ? 30 : 20;
              // color = focused ? '#ff00ff' : '#00ffff';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'rocket' : 'anchor';
              size = focused ? 30 : 20;
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff00ff',
          tabBarInactiveTintColor: '#00ff00',
          tabBarActiveBackgroundColor: 'gray',
          tabBarInactiveBackgroundColor: 'white',
        })} 
        activeColor='#ff00ff'
        inactiveColor='#00ff00'
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',  
  }
});
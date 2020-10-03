import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainAction from './pages/main'
import Info from './pages/info';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <MainAction />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Info />
    </View>
  );
}



export default function MyTabs() {
  
  return (
    
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Info') {
          iconName = focused ? 'info-circle' : 'info-circle';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
		tabBarOptions={{
		activeTintColor: '#9C27B0',
		inactiveTintColor: '#777',
	}}
>
      <Tab.Screen name="Home" component={MainAction} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

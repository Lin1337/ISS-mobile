import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainAction from './pages/main'
import Info from './pages/info';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();





export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainAction} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

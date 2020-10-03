import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainAction from './pages/main'
import Info from './pages/info';
import { NavigationContainer } from '@react-navigation/native';
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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainAction} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

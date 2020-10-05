import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { IconButton, Colors } from 'react-native-paper';
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <IconButton
    icon="github"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

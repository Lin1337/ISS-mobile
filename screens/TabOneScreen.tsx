import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {
 state = {
   iss_position: []
 }
 componentDidMount(){
   axios.get('http://api.open-notify.org/iss-now.json').then(res =>{
    console.log(res.data); 
   this.setState({iss_postion: res.data.iss_position})
   })
 } 
 
 
 
 
 render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
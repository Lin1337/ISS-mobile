import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';

const {height, width} = Dimensions.get('window');


export default class App extends React.Component {
 state = {
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
 }}
 componentDidMount(){
   axios.get('http://api.open-notify.org/iss-now.json').then(res =>{
    
     let lat = parseInt(res.data.iss_position.latitude);
     let log = parseInt(res.data.iss_position.longitude);
     let latDelta = lat/height;
     let logDelta = log/width; 
   this.setState({
     region:{
       latitude: lat,
       longitude: log,
       latitudeDelta: latDelta,
       longitudeDelta: logDelta,
     }
   })
   let yes = typeof height;

   console.log(this.state.region);
   })
   
 } 
 
 
 
 
 render() {
    return (
      <View style={styles.container}>
        <MapView 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={this.state.region}
        style={styles.mapStyle} />
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
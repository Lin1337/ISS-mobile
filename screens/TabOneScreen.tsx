import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import axios from 'axios';
const {height, width} = Dimensions.get('window');


export default class App extends React.Component {
 state = {
  marker: 0,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  }
}


 componentDidMount(){
   axios.get('http://api.open-notify.org/iss-now.json').then(res =>{
    
     let lat = parseInt(res.data.iss_position.latitude);
     let log = parseInt(res.data.iss_position.longitude);
    /* let latDelta = lat/height;
     let logDelta = log/width; */
    let latDelta = 100;
     let logDelta = 100; 
   this.setState({
     region:{
       latitude: lat,
       longitude: log,
       latitudeDelta: latDelta,
       longitudeDelta: logDelta,
     }
   })
   let markerCords = +lat + +log;
   console.log(lat);
   console.log(markerCords);
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
        style={styles.mapView}>
      <Marker 
      coordinate={this.state.region}>
     <Text style={styles.pinText}>ISS</Text>
        <Image source={{ uri: "https://image.flaticon.com/icons/png/512/26/26249.png" }} style={{ width: 150, height: 150 }} />
      </Marker>

        </MapView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',

  },

  mapView: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
  },

  mapCenterMarkerView: {
    flex: 1,
  },

  mapCenterMarker: {
    width: 32,
    height: 32
  },
  pinText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
},
});
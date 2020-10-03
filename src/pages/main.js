
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import api from '../services/api';
import MapView from 'react-native-maps';

export default class App extends Component {


state = {
  docs: [],
};

  componentDidMount(){
    this.getISSInfo();
  }
   getISSInfo = async () => {
    try {
      let response = await fetch(
        'https://api.wheretheiss.at/v1/satellites/25544'
      );
      let json = await response.json();
      console.log(json);
      return json.latitude;
    } catch (error) {
      console.error(error);
    }
  };


  render() {
    return (

      <View style={styles.container}>

        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        
        </MapView>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
  
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  map: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

});
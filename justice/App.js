import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions, Alert, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon, MapView } from 'expo';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        
        <AppNavigator />
        
      </View>
    );

  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});




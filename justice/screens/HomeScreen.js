import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert, Button
} from 'react-native';
import { WebBrowser, MapView, Font } from 'expo';
import { MonoText } from '../components/StyledText';
import email from 'react-native-email';
import { stringify as queryString } from 'query-string';




const { width, height } = Dimensions.get('window')
const screenHeight = height
const screenWidth = width
const ASPECT_RATIO = screenWidth / screenHeight
const LatDel = 0.2
const lngDel = LatDel * ASPECT_RATIO


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      mPos: {
        latitude: 0,
        longitude: 0,
      },
      crimeLocations:[],
      markerPos:{
        latitude: 0,
        longitude: 0}
      
    }
  }


  componentWillMount() {
    geoOptions = { enableHighAccuracy: true, timeout: 55000, maximumAge: 10000 }
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFail,
      geoOptions
    );

    let watchID = navigator.geolocation.watchPosition(
      this.locChanged,
      this.geoFail,
      geoOptions
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }


  geoSuccess = (position) => {
    Alert.alert("Locating Successful")
    var lat = parseFloat(position.coords.latitude);
    var lng = parseFloat(position.coords.longitude);

    var intialRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }

    this.setState({
      position: intialRegion,
      mPos: { latitude: lat, longitude: lng },
    })

    this.getCrimeLocation()
  }


  locChanged = (position) => {
    Alert.alert("Location Changed")
    var lat = parseFloat(position.coords.latitude);
    var lng = parseFloat(position.coords.longitude);

    var newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5
    }


    this.setState({
      position: newRegion,
      mPos: { latitude: lat, longitude: lng }
    })

   
  }

  geoFail = (err) => {
    Alert.alert(err.message)
  }


  static navigationOptions = {
    header: null,
  };

  

  help = () => {
    alert("HELP IS ON THE WAY TO:  \n \n LATITUDE: " + this.state.position.latitude + "\n LONGITUDE: " + this.state.position.longitude)
  //   email('diaa4321@gmail.com', {
  //     subject: 'EMERGENCY-HELP REQUIRED',
  //     body: "HELP IS ON THE WAY TO:  \n \n LATITUDE: " + this.state.position.latitude + "\n LONGITUDE: " + this.state.position.longitude
    
  // }).catch(console.error)

}


getCrimeLocation=()=>{  
  let url = `https://api.foursquare.com/v2/venues/explore?ll=${this.state.mPos.latitude},${this.state.mPos.longitude}&client_id=&client_secret=&v=20190221&limit=20`
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      //console.log(responseJson)
      this.setState({
        crimeLocations:responseJson.response.groups[0].items
        
      })

      console.log(this.state.crimeLocations)
    })
    .catch(error => {
      console.error(error);
    });

}


  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={this.state.position} >

          { this.state.crimeLocations.map(loc=>(
              <MapView.Marker key={loc.venue.id} title={loc.venue.name} coordinate={{latitude:loc.venue.location.lat,longitude:loc.venue.location.lng}} />
      ))

      }
        </MapView>
        <View style={{ marginTop: 540, justifyContent: 'center', alignItems: 'center', margin: 70 }}>
          <TouchableOpacity
            onPress={this.help}>
            <Text style={styles.text}>
              SEND HELP!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    borderWidth: 2,
    padding: 15,
    borderColor: '#003a4d',
    backgroundColor: 'rgba(77, 0, 19, 0.8)',
    color:"#b8860b"
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});

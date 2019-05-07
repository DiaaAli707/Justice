import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {WebBrowser} from 'expo'

export default class LinksScreen extends React.Component {
  state = {
    data: [],
  }

  static navigationOptions = {
    title: 'CRIME NEWS',
  };

  componentDidMount = () => {
    fetch('https://newsapi.org/v2/everything?q=crime+in+vancouver&sortBy=popularity&apiKey=', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.articles
        })
        console.log(this.state.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  goToWebPage=(url)=>{
    WebBrowser.openBrowserAsync(url);
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'rgba(	0, 96, 128, 0.1)', }}>
        {
          this.state.data.map((item) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.container}
                onPress={
                  ()=>{this.goToWebPage(item.url)}
                }
              >
                <Image source={{ uri: item.urlToImage }} style={styles.cover} />

                <Text style={styles.text} key={item.url}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,

    borderBottomWidth: 1.2
  },
  cover: {
    flex: 1,
    height: 180,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  text: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#b8860b',
    fontSize: 16
  }
});

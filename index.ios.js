/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TabBarIOS,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';
import Home from './src/Home.js';
import Trending from './src/Trending.js';
import Settings from './src/Settings.js';
import PokemonDetail from './src/PokemonDetail.js';

var ROUTES = {
 home: Home,
 trending: Trending,
 settings: Settings,
 pokemonDetail: PokemonDetail,
}

export default class class1 extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.name]
    return <Component route={route} navigator={navigator} />
  }

  render() {
    return (
      <View style={styles.container}>
      <Navigator
        initialRoute={{ name: 'home' }}
        renderScene={this.renderScene}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('class1', () => class1);

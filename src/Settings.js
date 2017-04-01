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
  View
} from 'react-native';
import CustomHeader from './Header.js'
import BasicListItem from './BasicListItem.js'
import BottomBar from './BottomBar.js'
import BottomBarItem from './BottomBarItem.js'
import AdvancedListItem from './AdvancedListItem.js'
import _ from 'underscore';

export default class Settings extends Component {

  constructor(props){
    super(props);
    //this.state = {news: [ new1, new2, new3, new4, new5]};
  }

  render() {
    return (
      <View style={styles.container}>
      <CustomHeader style={styles.header} title={"Trending"}/>
      <Text style={styles.title}>Hooooola!</Text>
      <BottomBar style={styles.bottomBar}
        func1={() => this.props.navigator.replace({name: 'home'})}
        func2={() => this.props.navigator.replace({name: 'trending'})}
        func3={() => this.props.navigator.replace({name: 'settings'})}/>
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
  header: {
    height: 50,
  },
  title: {
    flex: 1,
  },
  bottomBar:{
    height: 80,
  },
});

AppRegistry.registerComponent('Settings', () => Settings);

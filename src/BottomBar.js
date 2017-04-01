import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import BottomBarItem from './BottomBarItem.js'

export default class BottomBar extends Component {
  render() {
    const { style, func1, func2, func3 } = this.props;
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={func1} >
            <BottomBarItem title="Item 1" numOfTab={"item1"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={func2}>
            <BottomBarItem title="Item 2" numOfTab={"item2"}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={func3}>
            <BottomBarItem title="Item 3" numOfTab={"item3"}/>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: "white",
    borderTopWidth:1,
    borderColor: "gray",
    justifyContent: 'space-between',
    height: 84,
    flexGrow: 1,
  },
});

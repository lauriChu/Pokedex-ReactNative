import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CustomHeader extends Component {
 static propTypes = {
   title: PropTypes.string.isRequired,
 }
 render() {
 const { title, style } = this.props;

 return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
    </View>
 );
 }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
});

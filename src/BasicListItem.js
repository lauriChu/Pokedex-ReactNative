import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BasicListItem extends Component {
 static propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
 }
 render() {
 const { title, subtitle } = this.props;
 return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.separator}/>
    </View>
 );
 }
}

const styles = StyleSheet.create({
  title:{
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle:{
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginTop: 5,
    fontSize: 20,
  },
  separator:{
    marginTop:10,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth:0.3,
  },
});

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class AdvancedListItem extends Component {
 static propTypes = {
   numberImage: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
 }

 render() {
 const { numberImage, title, style } = this.props;
 const imageIcon = icons[this.props.numberImage];

 return (
    <View style={style}>
      <Image  style={styles.image}
              source={imageIcon}
              resizeMode="center"/>
      <Text style={styles.title}>{title}</Text>
    </View>
 );
 }
}

const icons = {
  item1: require('../bookmark50.png'),
  item2: require('../search50.png'),
  item3: require('../settings50.png'),
}

const styles = StyleSheet.create({
  view:{
    backgroundColor: 'gray',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  title:{
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontWeight: 'bold',
    margin:7,
    fontSize: 30,
  },
  image:{
    height: 40,
    width: 40,
    justifyContent: 'flex-start',
    margin: 5,
  },
});

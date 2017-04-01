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
  Dimensions,
  Image,
  ActivityIndicator,
  View
} from 'react-native';
import CustomHeader from './Header.js'
import BasicListItem from './BasicListItem.js'
import BottomBar from './BottomBar.js'
import BottomBarItem from './BottomBarItem.js'
import AdvancedListItem from './AdvancedListItem.js'
import _ from 'underscore';

export default class PokemonDetail extends Component {

  constructor(props){
    super(props);
    this.state = { pokemon: {}, loading: true }
  }

  async componentWillMount() {
    const pokemonId = this.props.route.pokemonId;
    if (pokemonId != null){
      const components = pokemonId.split('/');
      const uri = 'https://pokeapi.co/api/v2/pokemon/' + components[3];

      try {
        const response = await fetch(uri);
        const jsonData = await response.json();

        this.setState({ pokemon: jsonData, loading: false })
      } catch(e) {

      }
    }else{
      this.setState({ loading: false });
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;

    if (loading) {
      return <ActivityIndicator style={styles.loading} />
    }

    return (
      <View style={styles.container}>
      <CustomHeader style={styles.header} title={"Pokemon"}/>
      <View style={styles.content}>
        <View style={styles.separator}/>
        <View style={styles.viewHorizontal}>
          <Image  source={{uri:this.state.pokemon.sprites.back_default}}
                  style={styles.image}
                  />
          <Image  source={{uri:this.state.pokemon.sprites.front_default}}
                  style={styles.image}
                  />
        </View>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.subtitle}>{this.state.pokemon.name}</Text>
        <View style={styles.separator}/>
        <View style={styles.viewHorizontal}>
          <View style={styles.viewDetail}>
            <Text style={styles.title}>Order</Text>
            <Text style={styles.subtitle}>{this.state.pokemon.id}</Text>
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.title}>Height</Text>
            <Text style={styles.subtitle}>{this.state.pokemon.height}</Text>
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.title}>Weight</Text>
            <Text style={styles.subtitle}>{this.state.pokemon.weight}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
      <BottomBar style={styles.bottomBar}
        func1={() => this.props.navigator.push({name: 'home'})}
        func2={() => this.props.navigator.pop()}
        func3={() => this.props.navigator.push({name: 'settings'})}/>
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
    height: Dimensions.get('window').height/10,
  },
  title: {
    fontSize: 20,
  },
  subtitle:{
    marginTop: 5,
    fontWeight: 'bold',

    fontSize: 30,
  },
  content: {
    height: Dimensions.get('window').height/1.3,
    marginLeft: 10,
    marginRight: 10,
  },
  separator:{
    marginTop:10,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth:0.3,
  },
  bottomBar:{
    height: Dimensions.get('window').height/4,
  },
  loading:{
    height: Dimensions.get('window').height/1.3,
  },
  image:{
    height:150,
    width:150,
  },
  viewHorizontal:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewDetail:{
    margin: 15,
  },
});

AppRegistry.registerComponent('PokemonDetail', () => PokemonDetail);

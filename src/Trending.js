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
  ListView,
  AsyncStorage,
  ActivityIndicator,
  View
} from 'react-native';
import {
  getPokemonList,
  getNumberOfPokemon,
} from './utils.js'
import CustomHeader from './Header.js'
import BasicListItem from './BasicListItem.js'
import BottomBar from './BottomBar.js'
import BottomBarItem from './BottomBarItem.js'
import AdvancedListItem from './AdvancedListItem.js'
import _ from 'underscore';

export default class Trending extends Component {

  constructor(props){
    super(props);
    const list = new ListView.DataSource({rowHasChanged: (p1, p2) => p1 !== p2});
    this.state = { pokemons: list, loading: true }
  }

  async componentWillMount() {
    // Fetch from BBDD

    try {
        const pokemonList = (await AsyncStorage.getItem('class1':PK_POKEMON_LIST)) || [];
        console.log(pokemonList);
        const list = this.state.pokemons;
        this.setState({pokemons: list.cloneWithRows(pokemonList),  loading: false })
    } catch (e) {
        console.log("Error fetching data", e);
    }

    if (pokemonList.lenght === 0){
      //Fetch from internet
      const uri = 'https://pokeapi.co/api/v1/pokedex/1/';

      try {
        const response = await fetch(uri);
        const jsonData = await response.json();
        const list = new ListView.DataSource({rowHasChanged: (p1, p2) => p1 !== p2});
        pokemonList = getPokemonList(jsonData.pokemon);
        this.setState({pokemons: list.cloneWithRows(pokemonList),  loading: false })

      } catch(e) {
        console.log(e);
      }
    }
  }

  async componentWillUnmount() {
    try {
      const pokemonList = this.state.pokemons;
    } catch (e) {
      console.log("Error saving data");
    }
  }

  render() {
    const { pokemons, loading, error } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <CustomHeader style={styles.header} title={"Pokemons"}/>
          <ActivityIndicator style={styles.loading} />
          <BottomBar style={styles.bottomBar}
            func1={() => this.props.navigator.replace({name: 'home'})}
            func2={() => this.props.navigator.replace({name: 'trending'})}
            func3={() => this.props.navigator.replace({name: 'settings'})}/>
          </View>
        );
    }

    return (
      <View style={styles.container}>
      <CustomHeader style={styles.header} title={"Pokemons"}/>
      <ListView
        dataSource={this.state.pokemons}
        renderRow={(rowPokemon) =>
          <TouchableOpacity onPress={() => this.props.navigator.push({name: 'pokemonDetail', pokemonId: rowPokemon.id})}>
            <BasicListItem key={rowPokemon.id} title={rowPokemon.name} subtitle={rowPokemon.id}/>
          </TouchableOpacity>
        }
        style={styles.content}
      />
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
    height: Dimensions.get('window').height/10,
  },
  title: {

  },
  content: {
    height: Dimensions.get('window').height/1.3,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomBar:{
    height: Dimensions.get('window').height/4,
  },
  loading:{
    height: Dimensions.get('window').height/1.3,
  },
});

AppRegistry.registerComponent('Trending', () => Trending);

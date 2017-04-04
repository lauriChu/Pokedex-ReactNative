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
  AsyncStorage,
  Dimensions,
  ListView,
  ActivityIndicator,
  View
} from 'react-native';
import _ from 'underscore';

export function getNumberOfPokemon(pokemonUrl) {
  const words = pokemonUrl.split('/');
  if (words[3] != null){
      return words[3];
  }else{
    return '';
  }
};
export  function getPokemonList(pokemonJsonList) {
  var pokemonsList = _.map( pokemonJsonList, item => {
    return ({
      id : getNumberOfPokemon(item.resource_uri),
      name : item.name,
    });
  });
  return pokemonsList;
};
export const pokemnoCount = 4;

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
  Dimensions,
  View
} from 'react-native';
import CustomHeader from './Header.js'
import BasicListItem from './BasicListItem.js'
import BottomBar from './BottomBar.js'
import BottomBarItem from './BottomBarItem.js'
import AdvancedListItem from './AdvancedListItem.js'
import Trending from './Trending.js';
import Settings from './Settings.js';
import _ from 'underscore';

var ROUTES = {
  home: Home,
  trending: Trending,
  settings: Settings,
}

var PK_POKEMON_LIST = "pokemonListPk";

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {news: allNews};
  }

  categoryFilter(category) {
    if (category == "All"){
      var newNews = allNews;
    }else{
        var newNews = _.filter(allNews, item => {
            return item.category == category;
        })
    }
    this.setState({
        news : newNews
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <CustomHeader style={styles.header} title={"Trending"}/>
      <View style={styles.view}>
        <ScrollView style={styles.scrollHorizontal} horizontal>
          <TouchableOpacity onPress={this.categoryFilter.bind(this, "All")}>
            <AdvancedListItem title="All" numberImage="item1" style={styles.viewStyleGray}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.categoryFilter.bind(this, CAT_NEWS)}>
            <AdvancedListItem title="Around you" numberImage="item1" style={styles.viewStyleYellow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.categoryFilter.bind(this, CAT_TECH)}>
            <AdvancedListItem title="Top News" numberImage="item2" style={styles.viewStyleGreen}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.categoryFilter.bind(this, CAT_SPORTS)}>
            <AdvancedListItem title="Sport News" numberImage="item3" style={styles.viewStylePink}/>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.scroll}>
        {
          _.map(
            this.state.news,
            item => <BasicListItem key={item.key} title={item.title} subtitle={item.subtitle}/>
          )
        }
        </ScrollView>
      </View>
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
  view: {
    height: Dimensions.get('window').height/1.3,
  },
  header: {
    height: Dimensions.get('window').height/10,
  },
  scroll:{
    height: Dimensions.get('window').height/2,
    margin: 15,
  },
  scrollHorizontal:{
    height: Dimensions.get('window').height/6,
    flexDirection: 'row',
  },
  bottomBar:{
    height: Dimensions.get('window').height/4,
  },
  viewStyleYellow:{
    backgroundColor: '#F8E71C',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  viewStyleGray:{
    backgroundColor: 'gray',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  viewStyleGreen:{
    backgroundColor: '#E6EE9C',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  viewStylePink:{
    backgroundColor: '#FFB1BB',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: 10,
  },
});

const CAT_NEWS = "News";
const CAT_SPORTS = "Sports";
const CAT_TECH = "Technology";

const new1 = {
  key: "1",
  title: "World Happiness Report",
  subtitle: "18k people talking about this",
  category: CAT_NEWS,
};

const new2 = {
  key: "2",
  title: "Stephen Hawking",
  subtitle: "120k people talking about this",
  category: CAT_NEWS,
};

const new3 = {
  key: "3",
  title: "Samsung",
  subtitle: "1M people talking about this",
  category: CAT_TECH,
};

const new4 = {
  key: "4",
  title: "Cristiano Ronaldo",
  subtitle: "510k people talking about this",
  category: CAT_SPORTS,
};

const new5 = {
  key: "5",
  title: "Xiaomi",
  subtitle: "120k people talking about this",
  category: CAT_TECH,
};

const allNews = [new1, new2, new3, new4, new5];

AppRegistry.registerComponent('Home', () => Home);

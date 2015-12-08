/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from "react-native";
import styles from "./app/styles/main";
import MovieWrap from "./app/components/demo1_wrap";
import MovieListWrap from "./app/components/listview_wrap";
import SearchFormWrap from "./app/components/searchform_wrap";

import icons from "./app/icons/icons";

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

class reactNativeInAction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'favorites'
    }
  }
  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'favorites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favorites'
            })
          }}
        >
        <MovieWrap />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="most-viewed"
          selected={this.state.selectedTab === 'mostviewed'}
          onPress={() => {
            this.setState({
              selectedTab: 'mostviewed'
            })
          }}
        >
        <MovieListWrap />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri:icons.search,scale:3}}
          title="搜索"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            })
          }}
        >
        <SearchFormWrap />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('reactNativeInAction', () => reactNativeInAction);

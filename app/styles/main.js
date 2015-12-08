"use strict";

import React from "react-native";

let {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae7ff',
    flex: 1,
  },
  movieItem:{
    flexDirection: 'row',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"rgba(234,211,110,0.6)"
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  thumbnail: {
    width: 100,
    height: 160,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  searchForm:{
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#CCC'
  },
  formtxt:{
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    height:50,
  },
  searchHeader:{
    marginTop:10,
    marginLeft:10,
    fontSize:18
  },
  searchList:{
    paddingLeft:10
  },
  searchItem:{
    paddingTop:8,
    paddingBottom:8,
    borderBottomWidth:1,
    borderBottomColor:"#CCC"
  },
  deleteIcon:{
    width:20,
    height:20,
    margin:10,
    opacity:0.6
  }
});

export { styles as default };

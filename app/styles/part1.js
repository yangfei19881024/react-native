'use strict';

import React from "react-native";

let {
  StyleSheet,
  Image
} = React;

var styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        marginTop:60
    },
    marTop18:{
        marginTop:18,
    },
    marTop14:{
        marginTop:14,
    },
    font14:{
        fontSize:14,
    },
    font10:{
        fontSize:12,
    },
    height160:{
        height: 160
    },
    yue:{
        height:80,
    },
    green:{
        color:'#55A44B',
        fontWeight: '900'
    },
    red:{
        color: '#FF3F0D',
        fontWeight: '900'
    },
    marLeft10:{
        marginLeft:10,
    },
    part_1_left:{
        flex: 1,
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
    },
    part_1_right:{
        flex:2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,
    },
    hanbao:{
        height:55,
        width:55
    },
    advbar:{
      padding:5,
    },
  	wrapper: {
      height:150
  	},
  	slide: {
    	height:150,
    	resizeMode: Image.resizeMode.cover,
  	}
});

export default styles;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Swiper = require('react-native-swiper');
import styles from "../styles/part1";

var {
  	StyleSheet,
  	Text,
  	View,
  	Image,
  	TouchableHighlight,
    ScrollView,
} = React;

var sliderImgs = [
  'http://image5.suning.cn/uimg/cms/img/145204591426884174.jpg',
  'http://image4.suning.cn/uimg/cms/img/145198078057374631.jpg',
  'http://image2.suning.cn/uimg/cms/img/145198665549681212.jpg'
];

// var Slider = React.createClass({
//   	render: function(){
// 	    return (
// 	      <Swiper style={styles.wrapper} showsButtons={false}  height={150} autoplay={true} showsPagination={true} horizontal={true}>
// 	        <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
// 	        <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
// 	        <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
// 	      </Swiper>
// 	    );
//   	}
// });

var Slider = React.createClass({
  	render: function(){
	    return (
	      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
	        <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
	        <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
	        <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
	      </Swiper>
	    );
  	}
});

export default Slider;

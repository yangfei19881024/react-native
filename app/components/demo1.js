'use strict';

import React from 'react-native';
import styles from "../styles/part1";
import Slider from "./Slider";

let {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} = React;

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{backgroundColor:'#f2f2f2'}}>
        <View style={styles.advbar}>
          <View>
              <Image style={{height:70}} source={{uri:'http://image5.suning.cn/uimg/cms/img/145204436136976844.jpg'}}></Image>
          </View>
        </View>
        <View style={{flexDirection:'row',height:130.5}}>
          <View style={{flex:1,height:130.5,paddingRight:0.5}}>
            <Image style={{height:130.5}} source={{uri:'http://image5.suning.cn/uimg/cms/img/145206520290466188.jpg'}}></Image>
          </View>
          <View style={{flex:1,height:130,flexDirection:'column'}}>
            <View style={{flex:1,borderBottomWidth:0.5,borderColor:'#FFF'}}>
              <Image style={{flex:1}} source={{uri:'http://image1.suning.cn/uimg/cms/img/145205338596625443.jpg'}}></Image>
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1}} source={{uri:'http://image4.suning.cn/uimg/cms/img/145187606321158035.jpg'}}></Image>
            </View>
          </View>
        </View>

        <View style={styles.advbar}>
          <View>
            <Image style={{height:33}} source={{uri:'http://image3.suning.cn/uimg/cms/img/144887015916878841.jpg'}}></Image>
          </View>
          <View style={{flexDirection:'row',height:192,paddingTop:1}}>
            <View style={{flex:1,height:192,paddingRight:1}}>
              <Image style={{height:192}} source={{uri:'http://image2.suning.cn/uimg/cms/img/145198355002415472.jpg'}}></Image>
            </View>
            <View style={{flex:1,height:192,flexDirection:'column'}}>
              <View style={{flex:1,paddingBottom:1}}>
                <Image style={{flex:1}} source={{uri:'http://image3.suning.cn/uimg/cms/img/145197791204841782.jpg'}}></Image>
              </View>
              <View style={{flex:1,paddingBottom:1}}>
                <Image style={{flex:1}} source={{uri:'http://image5.suning.cn/uimg/cms/img/145198909252748276.jpg'}}></Image>
              </View>
              <View style={{flex:1,paddingBottom:1}}>
                <Image style={{flex:1}} source={{uri:'http://image3.suning.cn/uimg/cms/img/145192200362478286.jpg'}}></Image>
              </View>
            </View>
          </View>
        </View>
        <Slider />
      </View>
    );

  }

}

export { Movie as default };

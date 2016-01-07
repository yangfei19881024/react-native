import React from "react-native";

let {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} = React;

class List extends React.Component{
  constructor(props) {
      super(props);
  }
  render(){

    return (

      <View>
        {this.props.data.map(()=>{
          return <Text>Hello world!</Text>
        })}
      </View>

    )
  }
}

class Test extends React.Component{
  constructor(props) {
      super(props);
  }
  render(){
    var datas = Array.from(new Array(10), () => 'a')

    return (
      <ScrollView>
      <List data={datas}/>
      <View>
        <Text
          numberOfLines={2}
        >
          昔日无线五虎将其中三虎刘德华、黄日华与苗侨伟私下感情十分好，但很少一起露面。3日下午有网友在微博上载两张他们郊游的照片，留言说：“今天刘德华与好友共叙，黄日华、苗侨伟。”只见他们心情十分好，笑容灿烂，刘德华还兴奋玩自拍，先跟坐在车上的黄日华与老婆梁洁华合照，再跟苗侨伟与女儿苗彤合照，苗彤长得亭亭玉立。苗侨伟站在后面开心伸开手拍照，大家都玩得十分尽兴
        </Text>
      </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({

})

export default Test;

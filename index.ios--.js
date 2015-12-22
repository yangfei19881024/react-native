import React from "react-native";

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Modal,
  AlertIOS,
  TouchableHighlight,
  SliderIOS,
  WebView,
} = React;

class reactNativeInAction extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isModalOpen: false,
        value: 0
      };
    }
    openModal() {
        this.setState({isModalOpen: true});
    }
    closeModal() {
        this.setState({isModalOpen: false});
    }
    confirmFun(text){
      console.log(`我点击了${text}`);
    }
    render() {
        return (
            <View style={styles.page}>
                <TouchableHighlight
                  underlayColor="yellow"
                  onPress={() => {
                    AlertIOS.alert(
                      '消息提示',
                      '你确定要删除吗',
                      [
                        {text: '否', onPress: (text) => console.log('否 pressed')},
                        {text: '确定', onPress: (text) => console.log('是 pressed')},
                      ],
                      'default'
                    )
                  }}
                >
                  <Text>点击我</Text>
                </TouchableHighlight>

                <SliderIOS
                  minimumValue={0}
                  maximumValue={10}
                  onValueChange={(value) => this.setState({value: value})} />
                <Text>{`您滑到了(${this.state.value})`}</Text>
                <WebView
                  startInLoadingState={true}
                  url="http://www.ninghao.net"
                >

                </WebView>
          </View>
        );
    }
}
var styles = StyleSheet.create({
    page: {
        backgroundColor:"#ABCDEF",
        flex: 1,
        paddingTop:70,
        color:"red"
    }
});

AppRegistry.registerComponent('reactNativeInAction', () => reactNativeInAction);

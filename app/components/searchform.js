'use strict';

import React from 'react-native';
import styles from '../styles/main';
import SearchResult from "./searchresult";
import icons from "../icons/icons.js";

let {
  Text,
  View,
  Image,
  ListView,
  TextInput,
  ActivityIndicatorIOS,
  TouchableHighlight,
  AsyncStorage
} = React;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      query: '',
      opacity: 0,
      loaded: true,
      searchHistory:''
    }

    AsyncStorage.getItem("searchHistory")
      .then((item) => {
        if( item ){
          this.setState({
            searchHistory:JSON.parse(item)
          });
        }
      })
  }

  //按下回车键 把当前搜索历史添加到 历史列表
  //!!!!! ...new set 不是很明白
  addSearchHistory(){
    let newHistory =
      [...new Set([this.state.query,...this.state.searchHistory])];

    this.setState({
      searchHistory: newHistory
    });

    AsyncStorage.setItem(
      "searchHistory",
      JSON.stringify(newHistory)
    )
  }

  async doSearch(item){

    try {
      await this.setState({
        query: item
      });

      this.fetchData();

    } catch (e) {
      console.log(e);
    }

  }

  fetchData(){

    this.setState({
      loaded: false,
      opacity:1,
    });

    const URL = `http://api.douban.com/v2/movie/search?q=${this.state.query}`;
    fetch(URL)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          opacity:0,
          loaded: true
        });
        this.props.navigator.push({
          title:responseData.title,
          component:SearchResult,
          passProps:{
            results:responseData.subjects
          }
        })
      })
      .done(() => this.addSearchHistory());
  }

  deleteHistory(item){
    let newHistory = new Set(this.state.searchHistory);
    newHistory.delete(item);

    this.setState({
      searchHistory: [...newHistory]
    });

    AsyncStorage.setItem(
      'searchHistory',JSON.stringify([...newHistory])
    )

  }

  renderSearchHistoryList(item){
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => {
          this.doSearch(item)
        }}
      >
        <View>
          <TouchableHighlight
            underlayColor="rgba(34, 26, 38, 0.1)"
            onPress={() => this.deleteHistory(item)}
          >
          <Image
            source={{uri:icons.delete}}
            style={styles.deleteIcon}
          />
          </TouchableHighlight>

          <Text style={styles.searchItem}>{item}</Text>

        </View>
      </TouchableHighlight>
    )
  }

  render() {

    return (
      <View style={[styles.container,{paddingTop:60}]}>
          <View style={styles.searchForm}>
            <TextInput
              value={this.state.query}
              style={styles.formtxt}
              editable={true}
              placeholder="搜索..."
              autoFocus
              keyboardType="default"
              returnKeyType="search"
              clearButtonMode="while-editing"
              onChangeText={(text) => {
                this.setState({
                  query: text
                });
              }}
              onSubmitEditing={ this.fetchData.bind(this) }
            >
            </TextInput>
            <ActivityIndicatorIOS
              size="small"
              color="#6435c9"
              animating={!this.state.loaded}
              style={{
                position:"absolute",
                right:12,
                top:16,
                opacity:this.state.opacity
              }}
            />
          </View>
          <Text style={styles.searchHeader}>搜索历史</Text>
          <ListView
            style={styles.searchList}
            dataSource={this.dataSource.cloneWithRows(this.state.searchHistory)}
            renderRow={this.renderSearchHistoryList.bind(this)}
          />
      </View>
    );
  }
}

export { SearchForm as default };

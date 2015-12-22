'use strict';

import React from 'react-native';
import styles from "../styles/main";
import MovieDetail from "./moviedetail";

let {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicatorIOS,
  TouchableHighlight,
} = React;

let REQUEST_URL = "https://api.douban.com/v2/movie/top250";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.url = 'https://api.douban.com/v2/movie/top250';

    this.state = {
      movies:[],
      loaded: false,
      start:0,
      count:20,
      total:0,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  getRequireUrl(
    url=this.url,
    start=this.state.start,
    count=this.state.count
  ){
    return `${url}?start=${start}&count=${count}`;
  }

  fetchData() {
    fetch(this.getRequireUrl())
      .then((response) => response.json())
      .then((responseData) => {
        let newStart = responseData.start + responseData.count;
        this.setState({
          movies: responseData.subjects,
          loaded: true,
          start: newStart,
          count: responseData.count,
          total: responseData.total
        });
      })
      .done();
  }

  //加载更多
  loadMoreData(){
    fetch(getRequireUrl())
      .then(response => response.json())
      .then(responseData => {
        let newstart = responseData.start + responseData.count;
        this.setState({
          start: newstart,
          movies: [...responseData.subjects,...this.state.movies]
        });
      })
      .done();
  }

  onEndReached(){
    console.log(`开始数据${this.state.start},总共${this.state.total}`);
    if( this.state.total > this.state.start ){
      this.loadMoreData();
    }

  }

  //这里movie 名字随便起
  renderMovie(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34, 26, 38, 0.1)"
        onPress={() => {
          this.props.navigator.push({
            title: movie.title,
            component: MovieDetail,
            passProps: {
              movie: movie
            }
          });
        }}
      >
        <View style={styles.movieItem}>
            <View>
              <Image
                source={{uri: movie.images.medium}}
                style={styles.thumbnail}
              />
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if( !this.state.loaded ){
      return (
        <View style={styles.loading}>
          <ActivityIndicatorIOS
            color="red"
            size="large"
          />
        </View>
      );
    }
    return (
      <View style={[styles.container,{paddingTop:60}]}>
        <ListView
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMovie.bind(this)}
          style={styles.listView}
          initialListSize={20}
          pageSize={this.state.count}
          initialListSize={this.state.count}
          onEndReached={this.fetchData.bind(this)}
        />
      </View>
    );
  }
}

export { MovieList as default };

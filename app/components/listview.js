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
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
          loaded: true,
        });
      })
      .done();
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
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie.bind(this)}
          style={styles.listView}
          initialListSize={20}
        />
      </View>
    );
  }
}

export { MovieList as default };

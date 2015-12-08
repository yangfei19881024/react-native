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
  NavigatorIOS,
} = React;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      movies: dataSource.cloneWithRows(this.props.results)
    }
  }

  renderMovieList(movie){
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
    return (
      <View style={[styles.container,{paddingTop:60}]}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
        >
        </ListView>
      </View>
    );
  }
}

export { SearchResult as default };

'use strict';

import React from 'react-native';
import styles from "../styles/main";
import MovieList from "./listview";

let {
  NavigatorIOS,
} = React;

class MovieListWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '最爱电影列表',
          component: MovieList
        }}
        shadowHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255, 255, 255, 0.8)"
        tintColor="rgba(255, 255, 255, 0.8)"
        translucent={true}
      />
    );
  }
}

export { MovieListWrap as default };

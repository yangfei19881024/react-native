'use strict';

import React from 'react-native';
import styles from "../styles/main";
import MovieList from "./listview";
import MovieDetail from "./moviedetail.js";
import icons from "../icons/icons";

let {
  NavigatorIOS,
} = React;

class MovieListWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  onRightButtonPress(){
    this.refs.nav.push({
      'title': '电影详情',
      'component': MovieDetail,
    });
  }
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          title: '',
          backButtonTitle: "111",
          component: MovieList,
          backButtonIcon: {uri:icons.search},
          rightButtonTitle: 'More!',
          onRightButtonPress: this.onRightButtonPress.bind(this)
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

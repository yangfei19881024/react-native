'use strict';

import React from 'react-native';
import styles from "../styles/main";

let {
  Text,
  View,
} = React;

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.loading}>
        <Text style={styles.txt}>--{this.props.movie.title}--</Text>
      </View>
    );
  }
}

export { MovieDetail as default };

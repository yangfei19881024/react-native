'use strict';

import React from 'react-native';
import styles from '../styles/main';
import SearchForm from "./searchform";

let {
  NavigatorIOS
} = React;

class SearchFormWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '搜索',
          component: SearchForm
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

export { SearchFormWrap as default };

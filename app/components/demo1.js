'use strict';

import React from 'react-native';
import styles from "../styles/main";

let {
  Text,
  View,
  Image,
  DatePickerIOS,
  SwitchIOS,
} = React;

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  render() {
    const MOCKED_MOVIES_DATA = [
      {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
    ];
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View>
        <View style={[styles.container,{paddingTop:100}]}>
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
          <Image style={styles.postImage} source={{uri: movie.posters.thumbnail}} />
        </View>

        <View>
          <SwitchIOS
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn} />
          <SwitchIOS
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn} />
        </View>

        <Text>{this.state.falseSwitchIsOn ? "On" : "Off"}</Text>

        <DatePickerIOS
          date={this.state.date}
          mode="time"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
        />
      <Text>{this.state.data}</Text>
      </View>
    );
  }
}

export { Movie as default };

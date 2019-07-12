import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CountDownContainer from './src/containers/CountDownContainer';

export default  class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <CountDownContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
});

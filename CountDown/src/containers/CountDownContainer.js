import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/counterActions';

class CountDownContainer extends Component {
  
  constructor(props) {
    super(props);
  }

  onClickIncrementButton = () => {
    this.props.counterActions.changeCounterColor(this.getRandomColor());
    this.props.counterActions.incrementCounter(this.props.counter.counterValue + 1);
  }

  onClickDecrementButton = () => {
    this.props.counterActions.changeCounterColor(this.getRandomColor());
    this.props.counterActions.decrementCounter(this.props.counter.counterValue - 1);
  }

  getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

  render() {
    const counterColor = this.props.counter.counterColor
    const counterValue = this.props.counter.counterValue

    return (
      <View>
        <View>
          <Text style={styles.navTitle}>Counter</Text>
        </View>
        <Text style={[styles.counterValue, { color: counterColor }]}>{counterValue}</Text>
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.plusButton} onPress={this.onClickIncrementButton}>
            <Text style={styles.plusButtonTitle}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.minButton} onPress={this.onClickDecrementButton}>
            <Text style={styles.minButtonTitle}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navTitle: {
    textAlign: 'center', 
    fontSize: 50, 
    marginTop: 30
  },
  counterValue: {
    fontSize: 150,
    textAlign: 'center',
    marginTop: 60
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 150
  },
  plusButtonTitle: {
    fontSize: 60
  },
  minButtonTitle: {
    fontSize: 70,
    marginBottom: 10
  },
  plusButton: {
    borderWidth: 2.0,
    borderColor: 'black',
    width: 100, 
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minButton: {
    borderWidth: 2.0,
    borderColor: 'black',
    width: 100, 
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDownContainer)
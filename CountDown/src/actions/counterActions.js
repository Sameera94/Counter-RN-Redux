import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_COLOR } from './types';

export const incrementCounter = (newCounterValue) => {
  return {
    type: INCREMENT_COUNTER,
    payload: newCounterValue
  }
}

export const decrementCounter = (newCounterValue) => {
  return {
    type: DECREMENT_COUNTER,
    payload: newCounterValue
  }
}

export const changeCounterColor = (newColor) => {
  return {
    type: COUNTER_COLOR,
    payload: newColor
  }
}
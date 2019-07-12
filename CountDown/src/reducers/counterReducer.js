import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_COLOR } from '../actions/types';

const initialState = {
  counterValue: 0,
  counterColor: 'black'
};

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: action.payload
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counterValue: action.payload
      };
    case COUNTER_COLOR:
      return {
        ...state,
        counterColor: action.payload
      }
    default:
      return state;
  }
}

export default counterReducer;
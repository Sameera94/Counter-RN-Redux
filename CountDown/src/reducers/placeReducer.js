import { ADD_PLACE } from '../actions/types';

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        placeName: action.payload
      };
    default:
      return state;
  }
}

export default placeReducer;
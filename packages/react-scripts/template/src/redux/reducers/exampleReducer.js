import {
  LOADING
} from '../actions/types'

const INITIAL_STATE = {
  loading: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING: // Successful authentication
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

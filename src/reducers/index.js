import { combineReducers } from 'redux';
import { REQUEST_RESET_STORE } from 'actions/types';

// import { reducer as lines } from 'reducers/lines';

const appReducer = combineReducers({
  // lines,
});


const rootReducer = (state, action) => {
  if (action.type === REQUEST_RESET_STORE) {   //without refreshing the route. We can clear the global state by referencing state as undefined
    state = undefined;
    action = undefined;                                    //reducers are supposed to return the initial state when they are called with undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
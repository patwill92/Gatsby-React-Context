import {
  applyMiddleware,
  createStore as reduxCreateStore,
  combineReducers
} from "redux";
import logger from "redux-logger";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;
    default:
      return state;
  }
};

export const hydrate = payload => {
  console.log(payload);
  return {
    type: "HYDRATE",
    payload
  };
};

const rootReducer = combineReducers({ reduxState: reducer });

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    { reduxState: { redux: false } },
    applyMiddleware(logger)
  );
export default createStore;

import { combineReducers } from "redux";

//UI State
import windowsReducer from "./ui/windowReducer";
import navigationReducer from "./ui/navigationReducer";
//Container state
import calculatorReducer from "./calculatorReducer";
import redditReducer from "./redditReducer";
import redditAuthReducer from "./redditAuthReducer";

export default combineReducers({
  calculators: calculatorReducer,
  reddit: redditReducer,
  auth: combineReducers({
    reddit: redditAuthReducer
  }),
  //split off UI state into its own branch to prevent state tree becoming polluted
  ui: combineReducers({
    windows: windowsReducer,
    navigation: navigationReducer
  })
});

import { combineReducers } from "redux";
import ProduceListReducer from "./produce-list-reducer";
import ContactUsListReducer from "./contacus-list-reducer";

const rootReducer = combineReducers({
  ProduceListReducer,
  ContactUsListReducer,
});

export default rootReducer;

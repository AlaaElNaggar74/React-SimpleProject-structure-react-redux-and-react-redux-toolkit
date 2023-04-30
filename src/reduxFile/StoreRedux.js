
import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { allreducer } from "..";
import { bankreducer } from "./bankaction/Bankreducer";
import { producteducer } from "./productaction/ProductReducer";

export let allreducer =combineReducers({
  bank: bankreducer,
  product: producteducer,
});


export let store = createStore(allreducer,applyMiddleware(thunk));

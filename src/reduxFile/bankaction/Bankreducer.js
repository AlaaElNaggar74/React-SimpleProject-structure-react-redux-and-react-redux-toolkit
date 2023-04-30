

import { withdrawvalue } from "./BankAction";
import { depositvalue } from "./BankAction";

export let bankreducer = (state = 1000, action) => {
  switch (action.type) {
    case withdrawvalue:
      return state - action.payload;

    case depositvalue:
      return state + action.payload;
    default:
      return state;
  }
};
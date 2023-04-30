import { addproductvalue,getproductvaluet } from "./Productaction";

export let producteducer = (state = [{"id":1,"title":"product-1"}], action) => {
  switch (action.type) {

    case getproductvaluet:
      return [...action.payload];

    case addproductvalue:
      return [...state,action.payload];
    
    default:
      return state;
  }
};

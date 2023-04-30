
export let addproductvalue = "addproduct";
export let removeproducvaluet = "removeproduct";
export let getproductvaluet = "getproduct";

export let addproduct = (value) => {
  
  return {
    type: addproductvalue,
    payload: value,
  };
};

export let getproduct = (value) => {
  return {
    type: getproductvaluet,
    payload: value,
  };
};
export let fetchproduct=  ()=>{
  return async (dispatch)=>{
    let res=await fetch('https://fakestoreapi.com/products');
    let data=await res.json();
    console.log(data);
    dispatch(getproduct(data));

  }

}
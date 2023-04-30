import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { store } from "./reduxFile/StoreRedux";
// import { withdraw ,deposit} from "./reduxFile/bankaction/BankAction";
import { withdraw, deposit } from "./ReduxxTookit/BankSlice/Bank-Slice";
import { addproduct ,fetchproductslice} from "./ReduxxTookit/productslice/productslice";
// import { fetchproduct } from "./reduxFile/productaction/Productaction";
import { useEffect } from "react";

function App() {
  let bankvalue = useSelector((state) => state.bank);
  let productvalue = useSelector((state) => state.product);
  console.log(productvalue);
  // console.log(bankvalue);
  let dispatch = useDispatch();
  // let dispatchx=useDispatch();
  let [totalvalue,settotalevalue]=useState();
  // console.log(totalvalue);

  useEffect(() => {
    dispatch(fetchproductslice());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="mb-5">Alaa El Naggar 72 Redux Bank System</h1>

          <div className="mb-3 col-12">
            <h1>Total Amount : 
            <span
              type="text"
              className="mb-3 text-center ms-5"
              id="dispalytotal"
              placeholder="zzz"

            >
              {bankvalue}
            </span></h1>
          </div>
          <div className="mb-3 col-6 m-auto">
            <input
              type="number"
              className="form-control text-center "
              id="input"
              placeholder="Enter Your Amount"
              onChange={(e)=>{
                settotalevalue(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 col-12 d-flex justify-content-center">
            <button
              className="btn btn-success  w-25 me-2 fw-bold "
              onClick={() => {
                dispatch(withdraw(+totalvalue));
                // dispatch(withdraw(100));
                // console.log(dispatch(withdraw(+totalvalue)));

              }}
            >
              WithDraw
            </button>
            <button
              className="btn btn-success w-25 fw-bold"
              onClick={() => {
                dispatch(deposit(+totalvalue));
                // dispatch(deposit(100));
              // console.log(dispatch(deposit(+totalvalue)));
              }}
            >
              Deposit
            </button>
          </div>
          <h1 className="mb-5">Product Redux</h1>
          <div className="mb-3 col-12 d-flex justify-content-center">
            <button
              className="btn btn-success w-25 fw-bold"
              onClick={() => {
                // dispatch(deposit(+totalvalue));
                dispatch(addproduct({ id: 2, title: "Product-2" }));
              }}
            >
              Addproduct
            </button>
          </div>
          {productvalue.map((e) => (
            <h1 key={e.id}>{e.title}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

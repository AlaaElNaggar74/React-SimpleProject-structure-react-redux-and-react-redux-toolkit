// import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


// export const productslice = createSlice({
//   name: 'productslice',
//   initialState:[{id:1,"title":"Product-1"}],
//   reducers: {
//   addproduct:(state=[],action)=>{
//   // return [...action.payload];
//         state.push(action.payload);
//    },


// }
// });
// // Action creators are generated for each case reducer function
// export let { addproduct } = productslice.actions

// export default productslice.reducer ///as it export default you can rename it in any place with any name you need as liks store toolkite


import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchproductslice=createAsyncThunk('productslice/fetchproduct',async ()=>{
  let res=await fetch('https://fakestoreapi.com/products');
  let data=await res.json();
  return data;
});

export const productslice = createSlice({
  name: 'productslice',
  initialState:[{id:1,"title":"Product-1"}],
  reducers: {
  addproduct:(state=[],action)=>{
  // return [...action.payload];
        state.push(action.payload);
   },
   },
   extraReducers:(builder)=>{

    builder.addCase(fetchproductslice.fulfilled,(state,action)=>{
      return action.payload;
      
    })
   }


});
// Action creators are generated for each case reducer function
export let { addproduct } = productslice.actions

export default productslice.reducer ///as it export default you can rename it in any place with any name you need as liks store toolkite






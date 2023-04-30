

import { configureStore } from '@reduxjs/toolkit'
import Bankreducer from './BankSlice/Bank-Slice'
// import Productreducer
import Productreducer from './productslice/productslice'
export const store = configureStore({
  reducer: {
    bank :Bankreducer,
    product:Productreducer
  },
})
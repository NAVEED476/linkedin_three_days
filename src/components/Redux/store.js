// import { configureStore,createStore,applyMiddleware } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

import { createStore,applyMiddleware } from "redux";

import reduxthunk  from "redux-thunk"
import logger from "redux-logger"

import rootreducer_fn from "./rootreducer";


const middleware = [reduxthunk]

if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}

const store  = createStore(rootreducer_fn,applyMiddleware(...middleware))


export default store

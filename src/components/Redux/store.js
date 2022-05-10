import { configureStore} from "@reduxjs/toolkit";
import { createStore,applyMiddleware } from "redux";
import userReducer from "./userSlice";
import reduxthunk  from "redux-thunk"
import logger from "redux-logger"
import rootreducer_fn from "./root-reducer";

const store1 = configureStore({
  reducer: {
    user: userReducer,
  },
});






const middleware = [reduxthunk]

if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}

const store  = createStore(rootreducer_fn,applyMiddleware(...middleware))


export  {store,store1}

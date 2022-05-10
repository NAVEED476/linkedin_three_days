import { combineReducers } from "redux";

import { reducer_fn } from "./reducer";


const rootreducer_fn = combineReducers({data:reducer_fn})

export default rootreducer_fn;
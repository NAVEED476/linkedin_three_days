import axios from "axios"
import * as types from "./action-type"


const addpost = () =>({
    type:types.ADDPOST
})


export const postadded = (post)=>{
    return function (dispatch){
        axios.post(`http://localhost:3001/data`,post).then(res=>console.log(res)).catch((err)=>console.log(err))
        dispatch(addpost(post))
    }
    
}
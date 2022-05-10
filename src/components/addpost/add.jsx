import React from 'react'
import { useState } from 'react';
import "./add.css"

import { useDispatch } from 'react-redux';
import {postadded} from '../redux/action'

const Addpost = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState({
        name: "",
        
    })

    const {name} = data;

    const handlesubmit = (e) => {
        e.preventDefault()

    }
    const handlechange = (e) => {
        setdata(e.target.value)
        if(name === ""){
            alert("hey add some data man")
        }
        else{
            dispatch(postadded(data))
            setdata({name:"",age:"",gender:""})
        }
    }
    return (
        <div>
            <center >
                <form onSubmit={handlesubmit} className="forminput">
                    <input type="text" onChange={handlechange} placeholder="enter your name" /><br />
                    <input type="text" onChange={handlechange} placeholder="enter your age" /> <br />
                    <input type="text" onChange={handlechange} placeholder="enter your gender" /><br />
                    <input type="submit" />
                </form>
            </center>
        </div>
    )
}

export default Addpost;
import React from 'react'
import { useState } from 'react';
// import "./add.css"

import { useDispatch } from 'react-redux';
import { postadded } from '../Redux/action';

const Addpost = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState({
        name: "",
        
    })

    const {name} = data;

    const handlesubmit = (e) => {
        e.preventDefault()
        if(name === ""){
            alert("hey add some data man")
        }
        else{
            dispatch(postadded(data))
            
            setdata({name:""})
        }

    }
    const handlechange = (e) => {
        let {name,value} = e.target;
        setdata({...data,[name]:value})
        
    }
    return (
        <div>
            <center >
                <form onSubmit={handlesubmit} className="forminput">
                    <input type="text" onChange={handlechange} placeholder="enter your name" name='name' /><br />
                    
                    <input type="submit" />
                </form>
            </center>
        </div>
    )
}

export default Addpost;
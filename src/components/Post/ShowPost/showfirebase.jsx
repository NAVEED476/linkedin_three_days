import React, { useEffect } from 'react'
import { useState } from 'react';

import { db } from "../../../firebase";


const Showfirebase = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
      db.collection("manullypost").onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
    },[])

    console.log(posts)
  return (
    
    <div>showfirebase
    {posts.map((user,i)=>{
        return(
        <li>{user.name.title} {user.name.first} {user.name.last}</li>
        
        )
    })}
    </div>
  )
}

export default Showfirebase
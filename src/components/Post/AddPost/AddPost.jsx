import styled from "styled-components";
import React, { useState,useEffect } from "react";
import { Paper, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";

import Styles from "./Style";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axios } from "axios"
import { postadded } from "../../Redux/action";
import ShowPost from "../ShowPost/ShowPost"
export function AddPost() {
  const nav = useNavigate();
  const direct = () => {
    nav("/profile");
  };
  const user = useSelector(selectUser);

  const classes = Styles();
  const [URL, setURL] = useState("");
  // const [enterpost, setEnterpost] = useState("");
  const [data, setdata] = useState("");

  // const { name } = data

  const dispatch = useDispatch()

  const handlechange = (e) => {
    // let { name, value } = e.target;
    setdata({ ...data, name: e.target.value })
  }
  const getData = () =>{
    fetch(`http://localhost:3001/data`)
    .then(x=>x.json())
    .then().catch(e=>{
      console.log(e.message)
    })
  }

  const submitPost = (e) => {

    e.preventDefault()

    // if (data  === "") {
    //   alert("input field can not be empty")
    // }
   
      dispatch(postadded(data))
      getData();

      
    

    // fetch(`http://localhost:3001/data`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: data,
    //   }),
    //   headers: {
    //     "content-Type": "application/json"
    //   }

    // }
    // )







  };

  return (
    <>
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar onClick={direct} src={user.photoURL} />
        <form className={classes.header__form} onSubmit={submitPost} name="data">
          <input
            placeholder="Start a Add"

            onChange={handlechange}
          />
          <input id="upload-image" type="file" accept="image/*" hidden />
          <input id="upload-video" type="file" accept="video/*" hidden />
        </form>
      </div>
      <div className={classes.upload__media}>
        <label
          htmlFor={URL === "" ? "upload-image" : ""}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{
              color: "#70b5f9",
            }}
          />
          <h4>Photo</h4>
        </label>
        <label
          htmlFor={URL === "" ? "upload-video" : ""}
          className={classes.media__options}
        >
          <YouTubeIcon style={{ color: "green" }} />
          <h4>Video</h4>
        </label>
        {/* <h1>{enterpost}</h1> */}
        <div className={classes.media__options}>
          <EventNoteIcon style={{ color: "orange", fontSize: 30 }} />
          <h4>Event</h4>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <h4>Write article</h4>
        </div>
      </div>

      <h1>naveed</h1>
    </Paper>

    

    </>
  );
}

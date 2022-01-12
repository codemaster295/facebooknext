import {
  AccountCircle,
  InsertEmoticon,
  PhotoLibrary,
  VideoCall,
} from "@mui/icons-material";
import { Dialog } from "@mui/material";
import React from "react";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import PostPopUp from "../component/PostPopUp";
// import Livepopup from "../livepopup/Livepopup";
const CreatePost = ({reload ,username}) => {
  const [openModal , setModal]=useState(false)
  const [openLive , setLive]=useState(false)
  const imageInput = useRef(null);
  const state = useSelector(state => state.auth)
  const getImage = () => {
    imageInput.current.click();
  };
  const setreload = ()=>{
    reload()
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(open)

  return (
    <>
      <div className="w-full mx-auto  bg-white shadow-lg">
        <div className="flex space-x-5 py-2 px-5 items-center justify-start ">
          <div className="profile-image flex items-center text-gray-300 hover:p-1  transform scale-100 hover:scale-105 transition-all duration-100 ease-linear hover:bg-gray-100 border border-transparent rounded-full cursor-pointer">
            <img className="rounded-full w-8" src={state && state.user && state.user.profileurl?state.user.profileurl:"https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-5 w-full ">
            <span onClick={handleClickOpen} className="search-input px-2 py-3 font-medium text-gray-500 transform hover:bg-gray-200 transition-all duration-100 ease-linear cursor-pointer">
              {state && state.user  ? `What's on your mind ${state.user.name} ?` : "please sign in "}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex justify-around py-5">
          <div className="flex items-center space-x-6 cursor-pointer" onClick={()=>setLive(true)}>
            <VideoCall
              className="text-red-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Live Video</span>
          </div>

          <div className="flex items-center space-x-6 cursor-pointer" onClick={ getImage}>
            <PhotoLibrary
              className="text-green-500 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Photo / Video</span>
            <input className="hidden" ref={imageInput} type="file" name="" id="" />
          </div>

          <div className="flex items-center space-x-6 cursor-pointer">
            <InsertEmoticon
              className="text-yellow-600 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 30 }}
            />
            <span className="font-bold tracking-widest text-sm text-gray-500">Feeling/Activity</span>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        className=""
        // keepMounted
        sx={{zIndex:"0"}}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <PostPopUp handleClose={handleClose}   username={username} setReload={setreload} setModal={setModal} />
      </Dialog>
      {/* {openModal?<PostPopUp open={open}  username={username} setReload={setreload} setModal={setModal} />:""} */}
      {/* {openLive?<Livepopup setLive={setLive}/>:"" } */}
      
    </>
  );
};

export default CreatePost;

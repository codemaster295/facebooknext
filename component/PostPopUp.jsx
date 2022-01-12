import React, { useState, useRef, useEffect } from "react";
// import $ from 'jquery'
import {
  AccountCircle,
  Cancel,
  Clear,
  EmojiEmotions,
  LocationOn,
  Lock,
  PhotoLibrary,
  Group
} from "@mui/icons-material";
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import { useLocation, useHistory } from 'react-router-dom';

import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import CircularProgress from '@mui/material/CircularProgress';

// import Feelactivities from "../feelings/Feelactivities";
// import { storage } from "../../../firebase";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCross, faTimesCircle, faUserTimes } from "@fortawesome/free-solid-svg-icons";

const PostPopUp = ({ setModal, setReload, username, handleClose }) => {
  const imageInput = useRef(null);
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");
  const [emojimodel, setEmojiModel] = useState(false);
  const [imageurl, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [fbData, setFbData] = useState([]);
  const [uploadPost, setUploadPost] = useState(false);
  const [process, setProcess] = useState("0")
  const [loader, setLoader] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const userName = "MMO";
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);


  const onPreview = async file => {
    // let src = file.url;
    // if (!src) {
    //   src = await new Promise(resolve => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file.originFileObj);
    //     reader.onload = () => resolve(reader.result);
    //   });
    // }
    // const image = new Image();
    // image.src = src;
    // const imgWindow = window.open(src);
    // imgWindow.document.write(image.outerHTML);
    // setPreviewImage(src)
  };
  const onChange = async ({ fileList: newFileList }) => {
    console.log(newFileList ,"newFileListnewFileList")
    setFileList(newFileList);
    let src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => resolve(reader.result);
    });
    setPreviewImage(src)
    onPreview()
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/12 shadow-2xl rounded-xl bg-white z-50  p-5 z-0 ">
        <div className="box space-y-5  scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-50 " style={previewImage ? { height: 50 + "vh", overflowY: "scroll" } : null}>
          <span className="font-medium relative text-lg text-black text-center block border-b-2 border-gray-200 py-2">
            Create post
            <span onClick={handleClose}>
              <Clear
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 cursor-pointer"
                style={{ fontSize: 20 }}
              />
            </span>
          </span>
          <div className="userwraper flex items-center space-x-3 px-5 ">
            <AccountCircle
              className="text-gray-300 cursor-pointer  "
              style={{ fontSize: 45 }}
            />
            <div className="space-y-1">
              <h1 className="username text-sm cursor-pointer">Mmo Globalia</h1>
              <div className="flex items-center space-x-2">
                <span className="time text-xs text-gray-500 tracking-widest cursor-pointer">
                  4 mins
                </span>
                <span className="privacyIcon flex items-center cursor-pointer">
                  <Lock style={{ fontSize: 15 }} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center ">
            {loader ? <div className="w-full h-full flex justify-center items-center rounded-xl absolute top-0 left-0 bg-white bg-opacity-75 z-50">
              <CircularProgress variant="determinate" className="!text-btn-blue" value={progress} />
            </div> : ""
            }

            <textarea
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              className="w-11/12  rounded-xl bg-gray-100 p-2  outline-none resize-none"
              name=""
              id="abc"
              cols="auto"
              rows="4"
              placeholder="What is in your mind Mmo?"
            ></textarea>
            {/* <TextareaAutosize className="w-11/12  rounded-xl bg-gray-100 p-2  outline-none" aria-label="empty textarea" placeholder="Empty" /> */}
            <div className="w-full p-2">

              {!previewImage ? "" : <div className="relative " style={{aspectRatio:"16/9"}}>
                <img className="object-cover w-full" src={previewImage} alt="" />
                <span className="absolute top-0 left-0 bg-gray-500 bg-opacity-30 w-full h-full "></span>
                <Cancel fontSize="large" className="text-white  absolute top-0 right-0 cursor-pointer" onClick={() => { setPreviewImage(""), setFileList([]) }} />
              </div>}


            </div>
          </div>
        </div>

        <div className="flex items-center w-full justify-around p-5">
          {/* <input
            className="hidden imageUploader"
            onChange={handleChange}
            ref={imageInput}
            type="file"
            name=""
            id=""
          />
          <PhotoLibrary
            className="text-btn-blue cursor-pointer"
            style={{ fontSize: 30 }}
            onClick={getImage}
          /> */}
          <ImgCrop aspect={16 / 9} rotate style={{ zIndex: "5555" }}>
            <Upload
              multiple={false}
              listType="text"
              onChange={onChange}
              ref={imageInput}
              customRequest={dummyRequest}
              maxCount={1}
            >
              <div className="">
                <PhotoLibrary
                  className="text-btn-blue cursor-pointer"
                  style={{ fontSize: 30 }}

                />
              </div>
            </Upload>
          </ImgCrop>
          <Group
            className="text-btn-blue cursor-pointer"
            style={{ fontSize: 30 }}
          />
          <LocationOn
            className="text-btn-blue cursor-pointer"
            style={{ fontSize: 30 }}
          />
          <EmojiEmotions
            className="text-btn-blue cursor-pointer"
            style={{ fontSize: 30 }}
            onClick={() => {
              setEmojiModel(!emojimodel);
            }}
          />
        </div>
        <div className="flex justify-center mb-5">
        </div>
      </div>
      {/* {emojimodel ? <Feelactivities setEmojiBox={setEmojiModel} /> : ""} */}
    </>
  );
};

export default PostPopUp;

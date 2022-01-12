import React, { useEffect } from "react";
import { FacebookIcon, FacebookRounded, OndemandVideo, SearchSharp, Storefront ,Mail,PeopleAlt,Home ,ExpandMore} from "@mui/icons-material";
import { SearchIcon } from "@mui/icons-material";
import { useRouter } from "next/router";

// import { Link, Link } from 'react-router-dom'

import { useState } from "react";
// import ProfileMenu from "../profilemenu/ProfileMenu";
// import { Backdrop, CircularProgress } from "@material-ui/core";
// import SearchBox from "../Searchbox/SearchBox";
import Link from 'next/link'
import { useSelector } from "react-redux";
import { Badge, useMediaQuery } from "@mui/material";
const Navbar = (props) => {
  const [friends, setFriends] = useState(false)
  const [profilemenu, setProfileMenu] = useState(false)
  // const [open, setOpen] = useState(false);
  const [user, setUser] = useState([])
  const [searchBoxParam, setSearchBoxParam] = useState(false)
  const router = useRouter()
  const state = useSelector(state => state.auth)
  const [open , setOpen] = useState(false)
  const handleClose = () => {
    setSearchBoxParam(!searchBoxParam)
  }
  console.log(open)
  const isMobile = useMediaQuery('(max-width:1024px)')
  console.log(state, "jahfdhai")
  return (
    <header className=" fixed top-0 left-0 w-full z-50  py-2 bg-white shadow-md">
      <div className="px-3 ">
        <div className="flex  items-center justify-between">
          <div className="flex items-center lg:w-1/3 w-1/5 space-x-2">
            <Link href="/" >
              <FacebookRounded sx={{ fontSize: 50 }} className="text-blue-500" />
            </Link>
            {/* className={`${"relative"}+ ${isMobile?"hidden"?isMobile && open?"flex":""}+{`flex items-center space-x-2 search-input`}`} */}
            <div  className="flex items-center space-x-2 search-input relative z-20" >
              <input type="text" name="" id=""  className={isMobile && open?"block search-input relative  py-2 pl-9":isMobile ?"hidden":" items-center space-x-2 search-input py-2 pl-9 outline-none bg-transparent"} />
              <SearchSharp className="absolute cursor-pointer" onClick={()=>{setOpen(!open)}} />
            </div>
          </div>
          <div className="md:flex hidden items-center justify-between space-x-10 h-full w-1/4 ">
            <div className={router.pathname === '/' ? "text-blue-500 border-b-2 border-blue-500 h-full" : "text-gray-500 h-full "}>
              <Link href="/home" >
                <Home />
              </Link>
            </div>
            <div className={router.pathname === '/friends' ? "text-blue-500 border-b-2 border-blue-500 h-full" : "text-gray-500"}>
              <Link href="/friends" >
                <PeopleAlt />
              </Link>
            </div>
            <div className={router.pathname === '/trending' ? "text-blue-500 border-b-2 border-blue-500 h-full" : "text-gray-500"}>
              <Link href="/trending" >
                <OndemandVideo />
              </Link>
            </div>
            <div className={router.pathname === '/marketplace' ? "text-blue-500" : "text-gray-500"}>
              <Link href="/marketplace" >
                <Storefront />
              </Link>
            </div>

          </div>
          {state && state.user ? <div className="w-1/3 flex items-center justify-end space-x-5" >
            <div className={` items-center  profile-button max-w-min pr-2 pl-0 py-1 space-x-1 lg:flex hidden`} onClick={() => { router.push(`/user/${state.user._id}`) }}>
              <div className="profile-image w-8 flex items-center ">
                <img className="rounded-full" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg" alt="" />
              </div>
              <h1 className="user-name text-xs font-bold ">{state.user ? state.user.name : "please sign in "}</h1>
            </div>
            <div className="relative py-2 rounded-full bg-gray-100 cursor-pointer">
            <div className=" flex w-10 justify-center">
              <Mail className="text-gray-500" />
            </div>
              <span className="bg-blue-500 text-white absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">5</span>
            </div>
            <div className="relative py-2 rounded-full bg-gray-100 w-10 flex items-center justify-center cursor-pointer">
              <ExpandMore />
            </div>
          </div> : "please sign in "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

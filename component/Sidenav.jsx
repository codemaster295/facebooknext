import {
  AccountCircle,
  Bookmark,
  Event,
  Flag,
  History,
  OndemandVideo,
  PeopleAlt,
  Storefront,
  Work,
  Facebook
} from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

const Sidenav = () => {
  const state = useSelector(state=>state.auth)
  return (
    
      <div className="w-1/5 pt-6 space-y-5 fixed top-20 transform  left-1/5 p-5 z-30 lg:block hidden">
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <AccountCircle
            className="text-blue-500 cursor-pointer transform  transition-all duration-100 ease"
            style={{ fontSize: 30 }}
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            {state.user && state.user.name ?state.user.name  :"please sign in "}
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <PeopleAlt
            style={{ fontSize: 30 }}
            className="text-red-500 cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Find Friends
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Facebook
            className="text-blue-500 cursor-pointer transform  transition-all duration-100 ease"
            style={{ fontSize: 30 }}
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Welcome
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <PeopleAlt
            style={{ fontSize: 30 }}
            className="text-green-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Groups
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Storefront
            style={{ fontSize: 30 }}
            className="text-purple-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            MarketPlace
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <OndemandVideo
            style={{ fontSize: 30 }}
            className="text-indigo-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Watch
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Event
            style={{ fontSize: 30 }}
            className="text-pink-500 cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Events
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <History
            style={{ fontSize: 30 }}
            className="text-yellow-600  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Memories
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Bookmark
            style={{ fontSize: 30 }}
            className="text-blue-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Saved
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Flag
            style={{ fontSize: 30 }}
            className="text-blue-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Pages
          </span>
        </div>
        <div className="flex items-center pl-2 space-x-5 w-full  py-2.5 rounded-md transition-all duration-100 ease-linear transform  bg-none hover:bg-gray-300 cursor-pointer">
          <Work
            style={{ fontSize: 30 }}
            className="text-blue-500  cursor-pointer transform  transition-all duration-100 ease"
          />
          <span className="text-sm text-gray-500 tracking-wider font-medium">
            Jobs
          </span>
        </div>
      </div>

  );
};

export default Sidenav;

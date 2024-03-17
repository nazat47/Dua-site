"use client";
import { IoLanguageOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { useEffect, useRef } from "react";

const LeftSide = ({ open, setOpen }) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 bg-[#0000004b] z-[999] w-screen h-screen transition-transform duration-300 ${
        open ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div
        ref={ref}
        className={`absolute right-0 top-0 h-full w-[400px] bg-white rounded-l-[70px] transition-transform duration-700 ease-in-out${
          open ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <h1 className="text-2xl text-center my-10">Settings</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-start gap-4 h-[70px] w-[80%] bg-gray-100 rounded-lg p-3">
            <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
              <IoLanguageOutline />
            </div>
            <p>Language Settingss</p>
          </div>
          <div className="flex items-center justify-start gap-4 h-[70px] w-[80%] bg-gray-100 rounded-lg p-3">
            <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
              <HiOutlineFolderOpen />
            </div>
            <p>General Settings</p>
          </div>
          <div className="flex items-center justify-start gap-4 h-[70px] w-[80%] bg-gray-100 rounded-lg p-3">
            <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
              <RxDashboard />
            </div>
            <p>Font Settings</p>
          </div>
          <div className="flex items-center justify-start gap-4 h-[70px] w-[80%] bg-gray-100 rounded-lg p-3">
            <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
              <RxDashboard />
            </div>
            <p>Appearance Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;

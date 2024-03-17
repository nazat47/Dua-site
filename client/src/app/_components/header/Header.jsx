"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io";
import { LiaHandsSolid } from "react-icons/lia";
import LeftSide from "../sidebar/leftSide/LeftSide";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-md:h-[50px] h-[100px] p-6 ml-auto max-md:bg-slate-200 bg-white xl:bg-slate-200 flex justify-between max-lg:z-[999]">
      <h1 className="text-2xl w-[60%] hidden xl:block">Duas Page</h1>
      <div className="hidden md:max-xl:flex items-center justify-start gap-4">
        <div className="bg-green-600 text-white size-14 rounded-lg flex items-center justify-center">
          <LiaHandsSolid size={30} />
        </div>
        <p className="font-semibold text-lg">Dua & Ruqyah</p>
      </div>
      <div className="flex items-center w-[50%] xl:w-[40%] justify-between">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="max-md:hidden p-4 w-[350px] rounded-lg md:max-xl:bg-gray-200"
          />
          <div className="max-md:hidden absolute right-1 z-1 size-12 md:max-xl:bg-white bg-gray-200 rounded-lg flex items-center justify-center">
            <CiSearch />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="max-md:hidden flex justify-center items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/788/616/non_2x/icon-islamic-man-glyph-style-simple-illustration-free-vector.jpg"
              className="h-[40px] w-[40px] rounded-full"
            />
            <IoMdArrowDropdown size={25} />
          </div>
          <div className="2xl:hidden max-md:flex items-end justify-between max-md:pr-12 max-md:w-screen">
            <p className="max-md:block hidden">Duas Page</p>
            <IoMdSettings
              size={25}
              className="text-green-600 cursor-pointer"
              onClick={(e) => setOpen(true) || e.stopPropagation()}
            />
          </div>
        </div>
      </div>
      <LeftSide open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;

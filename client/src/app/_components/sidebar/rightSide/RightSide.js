import { PiHouse } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { TbMedicineSyrup } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { LiaHandsSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";

const RightSide = () => {
  return (
    <div className="w-screen h-[80px] xl:w-[150px] xl:min-h-screen rounded-t-[50px] xl:rounded-none bg-white p-2 xl:p-6 xl:bg-slate-200 max-xl:fixed bottom-0 xl:block shadow-lg xl:shadow-none max-lg:z-[999]">
      <div className="bg-white w-full h-full rounded-t-[50px] xl:rounded-3xl xl:mt-12 xl:w-[100px] xl:h-screen flex xl:flex-col xl:gap-4 items-center justify-between xl:justify-start p-4 xl:shadow-none">
        <div className="hidden bg-green-600 text-white xl:mb-20 size-14 rounded-lg xl:flex items-center justify-center">
          <LiaHandsSolid />
        </div>
        <div className="xl:bg-slate-200 size-12 rounded-full flex items-center justify-center text-xl xl:text-md">
          <PiHouse />
        </div>
        <div className="xl:bg-slate-200 size-12  rounded-full flex items-center justify-center text-xl xl:text-md">
          <RxDashboard />
        </div>
        <div className="xl:bg-slate-200 size-12  rounded-full flex items-center justify-center text-xl xl:text-md">
          <FaRegLightbulb />
        </div>
        <div className="xl:bg-slate-200 size-12 rounded-full flex items-center justify-center text-xl xl:text-md">
          <CiBookmark />
        </div>
        <div className="xl:bg-slate-200 size-12 rounded-full flex items-center justify-center text-xl xl:text-md">
          <TbMedicineSyrup />
        </div>
        <div className="hidden xl:bg-slate-200 size-12 rounded-full xl:flex items-center justify-center">
          <HiOutlineChatBubbleOvalLeft />
        </div>
        <div className="hidden bg-slate-200 size-12 rounded-full xl:flex items-center justify-center">
          <IoBookOutline />
        </div>
        <div className="hidden bg-green-600 text-white xl:mt-12 size-14 rounded-lg xl:flex items-center justify-center">
          <FaHandHoldingHeart />
        </div>
      </div>
    </div>
  );
};

export default RightSide;

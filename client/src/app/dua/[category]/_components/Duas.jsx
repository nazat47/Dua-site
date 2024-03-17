"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HiPlayCircle } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { LuShare2 } from "react-icons/lu";
import { PiWarningOctagonThin } from "react-icons/pi";
import { FaCirclePause } from "react-icons/fa6";

const Duas = ({ subCat }) => {
  const [dua, setDua] = useState(null);
  const [play, setPlay] = useState(true);
  const [active, setActive] = useState(0);
  const audioRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const getDuas = async () => {
      try {
        const { data } = await axios.get(
          `https://dua-site.onrender.com/dua/${subCat.subcat_id}`
        );
        setDua(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDuas();
  }, [subCat]);

  useEffect(() => {
    const section = searchParams.get("dua");
    const element = document.getElementById(`dua-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, [searchParams]);

  const playAudio = (duaId) => {
    if (duaId === active) {
      if (play) {
        audioRef.current.play();
        setPlay(false);
      } else {
        audioRef.current.pause();
        setPlay(true);
      }
    }
  };
  return (
    <div>
      {dua?.map((dua, i) => (
        <div
          key={i}
          id={`dua-${dua.dua_id}`}
          className="mb-4 h-auto w-full bg-white rounded-lg p-4"
        >
          <div className="flex flex-col space-y-4 justify-start items-start">
            <div className="flex items-center justify-start gap-3">
              <img
                src="/arabic_icon.jpg"
                alt="icon"
                className="size-7 rounded-full"
              />
              <p className="text-green-600 font-semibold">{`${i + 1}. ${
                dua.dua_name_en
              }`}</p>
            </div>
            <p className="">{dua.top_en}</p>
            <p className="ml-auto">{dua.dua_arabic}</p>
            {dua.transliteration_en && (
              <p>
                <span className="font-semibold">Transliteration: </span>
                {dua.transliteration_en}
              </p>
            )}
            {dua.translation_en && (
              <p>
                <span className="font-semibold">Translation: </span>{" "}
                {dua.translation_en}
              </p>
            )}
            <div className="flex flex-col justify-start items-center">
              <p className="text-green-600 mr-auto font-semibold">Reference:</p>
              <p>{dua.refference_en}</p>
            </div>
            <p>{dua.bottom_en}</p>
            <div className="w-full flex justify-between items-center">
              {dua.audio && (
                <div
                  onClick={() => setActive(dua.dua_id) || playAudio(dua.dua_id)}
                  className="cursor-pointer"
                >
                  {active === dua.dua_id && !play ? (
                    <>
                      <FaCirclePause
                        className="text-green-600 cursor-pointer"
                        size={40}
                      />
                      <audio ref={audioRef} src={dua.audio} />
                    </>
                  ) : (
                    <>
                      <HiPlayCircle
                        className="text-green-600 cursor-pointer"
                        size={40}
                      />
                      <audio ref={audioRef} src={dua.audio} />
                    </>
                  )}
                </div>
              )}
              <div className="flex gap-4 ml-auto">
                <div className="relative group">
                  <IoCopyOutline
                    size={25}
                    className="text-gray-500 cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:flex top-[-40px] right-[-20px] bg-gray-700 rounded-lg">
                    <div className="absolute top-7 right-7 w-0 h-0 border-l-[7px] border-l-transparent border-t-[11px] border-t-gray-700 border-r-[7px] border-r-transparent"></div>
                    <div className="h-[30px] w-[70px] flex items-center justify-center">
                      <p className="text-xs text-white">Copy</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <CiBookmark
                    size={25}
                    className="text-gray-500 cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:flex top-[-40px] right-[-20px] bg-gray-700 rounded-lg">
                    <div className="absolute top-7 right-7 w-0 h-0 border-l-[7px] border-l-transparent border-t-[11px] border-t-gray-700 border-r-[7px] border-r-transparent"></div>
                    <div className="h-[30px] w-[70px] flex items-center justify-center">
                      <p className="text-xs text-white">Bookmark</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <GoLightBulb
                    size={25}
                    className="text-gray-500 cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:flex top-[-40px] right-[-20px] bg-gray-700 rounded-lg">
                    <div className="absolute top-7 right-7 w-0 h-0 border-l-[7px] border-l-transparent border-t-[11px] border-t-gray-700 border-r-[7px] border-r-transparent"></div>
                    <div className="h-[30px] w-[70px] flex items-center justify-center">
                      <p className="text-xs text-white">Memorize</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <LuShare2
                    size={25}
                    className="text-gray-500 cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:flex top-[-40px] right-[-20px] bg-gray-700 rounded-lg">
                    <div className="absolute top-7 right-7 w-0 h-0 border-l-[7px] border-l-transparent border-t-[11px] border-t-gray-700 border-r-[7px] border-r-transparent"></div>
                    <div className="h-[30px] w-[70px] flex items-center justify-center">
                      <p className="text-xs text-white">Share</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <PiWarningOctagonThin size={25} className="cursor-pointer" />
                  <div className="absolute hidden group-hover:flex top-[-40px] right-[-20px] bg-gray-700 rounded-lg">
                    <div className="absolute top-7 right-7 w-0 h-0 border-l-[7px] border-l-transparent border-t-[11px] border-t-gray-700 border-r-[7px] border-r-transparent"></div>
                    <div className="h-[30px] w-[70px] flex items-center justify-center">
                      <p className="text-xs text-white">Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Duas;

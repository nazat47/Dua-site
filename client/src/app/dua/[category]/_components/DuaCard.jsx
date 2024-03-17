"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Duas from "./Duas";

const DuaCard = ({
  cat,
  subActive,
  openCategory,
  setOpenCategory,
  openRef,
}) => {
  const [subCat, setSubCat] = useState(subActive);
  const searchParams = useSearchParams();
  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/sub-category/${cat.cat_id}`
        );
        setSubCat(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubCategories();
  }, [cat]);

  useEffect(() => {
    const section = searchParams.get("dua");
    if (section === null) {
      const sec = searchParams.get("subcat");
      const element = document.getElementById(`subcat-${sec}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClick = (e) => {
      if (openRef.current && !openRef.current.contains(e.target)) {
        setOpenCategory(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="flex lg:hidden w-full h-[60px] bg-white rounded-lg items-center justify-start p-4 gap-4 mb-4">
        <RxHamburgerMenu
          onClick={(e) => setOpenCategory(true) || e.stopPropagation()}
          className="cursor-pointer"
        />
        <p>{cat?.cat_name_en}</p>
      </div>
      {subCat?.map((subCat, i) => (
        <div
          id={`subcat-${subCat.subcat_id}`}
          className="flex flex-col gap-4"
          key={i}
        >
          <div className="flex gap-4 p-4 bg-white rounded-lg min-h-[30px]">
            <p className="font-semibold text-green-600">Section: </p>
            <p>{subCat.subcat_name_en}</p>
          </div>
          <div>
            <Duas subCat={subCat} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DuaCard;

"use client";
import { useEffect, useState, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineFolderOpen } from "react-icons/hi";
import axios from "axios";
import DuaCard from "./_components/DuaCard";

const DuaPage = ({ params }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [active, setActive] = useState(null);
  const [subCatActive, setSubCatActive] = useState(null);
  const [duaActive, setDuaActive] = useState(null);
  const [openCategory, setOpenCategory] = useState(false);
  const openRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://dua-site.onrender.com/category"
        );
        setCategories(data);
        setActive(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const { data } = await axios.get(
          `https://dua-site.onrender.com/sub-category/${active.cat_id}`
        );
        setSubCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubCategories();
  }, [active]);

  useEffect(() => {
    const getDuas = async () => {
      try {
        const { data } = await axios.get(
          `https://dua-site.onrender.com/dua/${subCatActive.subcat_id}`
        );
        setDuas(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDuas();
  }, [subCatActive]);

  const handleCategoryClick = (cat) => {
    const name = cat.cat_name_en.split(" ").join("-");
    const newSearch = `/dua/${name}?cat=${cat.cat_id}`;
    window.history.pushState({}, "", newSearch);
  };
  const handleSubCategoryClick = (subCat) => {
    const searchParam = new URLSearchParams(window.location.search);
    searchParam.set("subcat", subCat.subcat_id);
    searchParam.delete("dua");
    const newSearch = searchParam.toString();
    const newUrl = `${window.location.pathname}?${newSearch}`;
    window.history.replaceState(null, null, newUrl);
  };
  const handleDuaClick = (dua) => {
    const searchParam = new URLSearchParams(window.location.search);
    searchParam.set("dua", dua.dua_id);
    const newSearch = searchParam.toString();
    const newUrl = `${window.location.pathname}?${newSearch}`;
    window.history.replaceState(null, null, newUrl);
  };

  const searchCategpry = (e) => {
    const getCats = document.getElementsByClassName("cat-class");
    const catName = document.getElementsByClassName("cat-name");
    for (var i = 0; i < getCats.length, i < catName.length; i++) {
      let text = catName[i].innerText.toLowerCase();
      if (text.indexOf(e.target.value.toLowerCase()) > -1) {
        getCats[i].style.display = "";
        setActive(null);
      } else {
        getCats[i].style.display = "none";
      }
    }
  };
  return (
    <div className="bg-slate-200 w-full min-h-screen p-4">
      <div className="flex gap-4">
        <div
          className={`lg:block lg:w-[400px] xl:h-screen lg:bg-white lg:rounded-xl max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-[#0000004b] z-[99] max-lg:w-screen max-lg:h-screen transition-transform duration-300 transform ${
            openCategory ? "max-lg:-translate-x-0" : "max-lg:-translate-x-full"
          }`}
        >
          <div
            ref={openRef}
            className={`max-lg:fixed max-lg:top-0 max-lg:pt-20 max-lg:left-0 lg:block lg:w-[400px] max-lg:h-screen lg:max-xl:h-[80vh] xl:h-screen bg-white lg:rounded-xl transition-transform duration-700 ease-in-out max-lg:transform ${
              openCategory
                ? "max-lg:-translate-x-0"
                : "max-lg:-translate-x-full"
            }`}
          >
            <div className="max-lg:hidden w-full h-[80px] bg-green-600 flex items-center justify-center rounded-t-lg">
              <p className="text-white text-xl">Categories</p>
            </div>
            <div className="p-3 h-full">
              <div className="max-lg:hidden relative">
                <input
                  onChange={searchCategpry}
                  type="text"
                  placeholder="Search Categories"
                  className="focus:outline-green-300 rounded-md w-full h-[50px] border border-gray-200 pl-8 my-3"
                />
                <IoMdSearch
                  className="absolute left-2 top-7 text-gray-400 "
                  size={20}
                />
              </div>
              <div className="h-[70vh] xl:h-[75vh] w-full flex flex-col gap-4 overflow-y-scroll overflow-x-hidden">
                {categories?.map((cat, i) => (
                  <>
                    <div
                      onClick={() =>
                        setActive(cat) ||
                        setSubCatActive({}) ||
                        handleCategoryClick(cat)
                      }
                      className={`cat-class h-fit w-full flex justify-between gap-3 rounded-lg ${
                        active?.cat_id === cat.cat_id
                          ? "bg-slate-200"
                          : "bg-white"
                      } p-3 cursor-pointer`}
                      key={i}
                    >
                      <div className="flex gap-4">
                        <img
                          src="/download.jpeg"
                          alt="category"
                          className="size-12 rounded-lg"
                        />
                        <div className="flex flex-col">
                          <p className="cat-name font-bold ">
                            {cat.cat_name_en}
                          </p>
                          <p className="text-gray-600">
                            Subcategory: {cat.no_of_subcat}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p>{cat.no_of_dua}</p>
                        <p className="text-gray-600">Duas</p>
                      </div>
                    </div>
                    <div className="h-auto relative border-l border-dotted border-green-600 ml-8 mb-4">
                      {active?.cat_id === cat.cat_id &&
                        subCategories?.map((subCat, i) => (
                          <>
                            <div
                              key={i}
                              className="flex w-full min-h-[10px] items-start justify-start my-2"
                            >
                              <div className="absolute left-[-5px] flex gap-3 items-center justify-start w-full">
                                <div className="size-2 bg-green-400 rounded-full"></div>
                                <p
                                  onClick={() =>
                                    setSubCatActive(subCat) ||
                                    handleSubCategoryClick(subCat)
                                  }
                                  className={`cursor-pointer font-semibold ${
                                    subCatActive?.subcat_id === subCat.subcat_id
                                      ? "text-green-600"
                                      : ""
                                  }`}
                                >
                                  {subCat.subcat_name_en}
                                </p>
                              </div>
                            </div>
                            <br />
                            {subCatActive?.subcat_id === subCat.subcat_id &&
                              duas?.map((dua, i) => (
                                <>
                                  {dua.dua_name_en !== null && (
                                    <div
                                      className="flex w-full min-h-[10px] items-start justify-start ml-10 mt-5 space-y-3"
                                      key={i}
                                    >
                                      <div className="flex gap-3 items-center justify-start w-full">
                                        <MdOutlineSubdirectoryArrowRight className="text-green-400" />
                                        <p
                                          onClick={() =>
                                            setDuaActive(dua) ||
                                            handleDuaClick(dua) || 
                                            setOpenCategory(false)
                                          }
                                          className={`cursor-pointer text-sm ${
                                            duaActive?.dua_id === dua.dua_id
                                              ? "text-green-500"
                                              : ""
                                          }`}
                                        >
                                          {dua.dua_name_en}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </>
                              ))}
                          </>
                        ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen overflow-y-scroll bg-slate-200 rounded-xl">
          <DuaCard
            cat={active}
            subActive={subCatActive}
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            openRef={openRef}
          />
        </div>
        <div
          className={`h-screen w-[400px] bg-white rounded-lg hidden 2xl:block`}
        >
          <h1 className="text-2xl text-center my-10">Settings</h1>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-start gap-4 h-[60px] w-[80%] bg-gray-100 rounded-lg p-3">
              <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
                <IoLanguageOutline size={10} />
              </div>
              <p className="text-xs">Language Settingss</p>
            </div>
            <div className="flex items-center justify-start gap-4 h-[60px] w-[80%] bg-gray-100 rounded-lg p-3">
              <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
                <HiOutlineFolderOpen size={10} />
              </div>
              <p className="text-xs">General Settings</p>
            </div>
            <div className="flex items-center justify-start gap-4 h-[60px] w-[80%] bg-gray-100 rounded-lg p-3">
              <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
                <RxDashboard size={10} />
              </div>
              <p className="text-xs">Font Settings</p>
            </div>
            <div className="flex items-center justify-start gap-4 h-[60px] w-[80%] bg-gray-100 rounded-lg p-3">
              <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center">
                <RxDashboard size={10} />
              </div>
              <p className="text-xs">Appearance Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaPage;

// import { IoMdSearch } from "react-icons/io";
// import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

// const Categories = ({categories, subCategories, duas,active, subCatActive, duaActive}) => {
//     const searchCategpry = (e) => {
//         const getCats = document.getElementsByClassName("cat-class");
//         const catName = document.getElementsByClassName("cat-name");
//         for (var i = 0; i < getCats.length, i < catName.length; i++) {
//           let text = catName[i].innerText.toLowerCase();
//           if (text.indexOf(e.target.value.toLowerCase()) > -1) {
//             getCats[i].style.display = "";
//             setActive(null)
            
//           } else {
//             getCats[i].style.display = "none";
//           }
//         }
//       };
//   return (
//     <div className="hidden lg:block w-[600px] h-screen bg-white rounded-xl">
//           <div className="w-full h-[80px] bg-green-600 flex items-center justify-center rounded-t-lg">
//             <p className="text-white text-xl">Categories</p>
//           </div>
//           <div className="p-3 h-full">
//             <div className="relative">
//               <input
//                 onChange={searchCategpry}
//                 type="text"
//                 placeholder="Search Categories"
//                 className="focus:outline-green-300 rounded-md w-full h-[50px] border border-gray-200 pl-8 my-3"
//               />
//               <IoMdSearch
//                 className="absolute left-2 top-7 text-gray-400 "
//                 size={20}
//               />
//             </div>
//             <div className="max-h-[75vh] w-full flex flex-col gap-4 overflow-y-scroll overflow-x-hidden">
//               {categories?.map((cat, i) => (
//                 <>
//                   <div
//                     onClick={() =>
//                       setActive(cat) ||
//                       setSubCatActive({}) ||
//                       handleCategoryClick(cat)
//                     }
//                     className={`cat-class h-fit w-full flex justify-between gap-3 rounded-lg ${
//                       active?.cat_id === cat.cat_id
//                         ? "bg-slate-200"
//                         : "bg-white"
//                     } p-3 cursor-pointer`}
//                     key={i}
//                   >
//                     <div className="flex gap-4">
//                       <img
//                         src="/download.jpeg"
//                         alt="category"
//                         className="size-12 rounded-lg"
//                       />
//                       <div className="flex flex-col">
//                         <p className="cat-name font-bold ">{cat.cat_name_en}</p>
//                         <p className="text-gray-600">
//                           Subcategory: {cat.no_of_subcat}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-center">
//                       <p>{cat.no_of_dua}</p>
//                       <p className="text-gray-600">Duas</p>
//                     </div>
//                   </div>
//                   <div className="h-auto relative border-l border-dotted border-green-600 ml-8 mb-4">
//                     {active?.cat_id === cat.cat_id &&
//                       subCategories?.map((subCat, i) => (
//                         <>
//                           <div className="flex w-full min-h-[10px] items-start justify-start my-2">
//                             <div className="absolute left-[-5px] flex gap-3 items-center justify-start w-full">
//                               <div className="size-2 bg-green-400 rounded-full"></div>
//                               <p
//                                 onClick={() =>
//                                   setSubCatActive(subCat) ||
//                                   handleSubCategoryClick(subCat)
//                                 }
//                                 className={`cursor-pointer font-semibold ${
//                                   subCatActive?.subcat_id === subCat.subcat_id
//                                     ? "text-green-600"
//                                     : ""
//                                 }`}
//                               >
//                                 {subCat.subcat_name_en}
//                               </p>
//                             </div>
//                           </div>
//                           <br />
//                           {subCatActive?.subcat_id === subCat.subcat_id &&
//                             duas?.map((dua, i) => (
//                               <>
//                                 {dua.dua_name_en !== null && (
//                                   <div
//                                     className="flex w-full min-h-[10px] items-start justify-start ml-10 mt-5 space-y-3"
//                                     key={i}
//                                   >
//                                     <div className="flex gap-3 items-center justify-start w-full">
//                                       <MdOutlineSubdirectoryArrowRight className="text-green-400" />
//                                       <p
//                                         onClick={() =>
//                                           setDuaActive(dua) ||
//                                           handleDuaClick(dua)
//                                         }
//                                         className={`cursor-pointer text-sm ${
//                                           duaActive?.dua_id === dua.dua_id
//                                             ? "text-green-500"
//                                             : ""
//                                         }`}
//                                       >
//                                         {dua.dua_name_en}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 )}
//                               </>
//                             ))}
//                         </>
//                       ))}
//                   </div>
//                 </>
//               ))}
//             </div>
//           </div>
//         </div>
//   )
// }

// export default Categories
import React, { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const Footer = () => {
  const {
    loading,
    posts,
    setPosts,
    pages,
    setPages,
    totalpages,
    setTotalpages,
    fetchBlogs,
    handlePageChange,
  } = useContext(AppContext);
  return loading ? (
    <div></div>
  ) : (
    <div className=" sticky bg-white  bottom-0 h-[60px] w-full border-2">
      <div className=" justify-between flex items-center  max-w-[960px] mx-auto">
        <div className=" justify-center flex gap-6 mt-2 items-center">
          {pages !== 1 && (
            <button
              onClick={() => handlePageChange(pages - 1)}
              className=" border p-2"
            >
              Previous
            </button>
          )}
          {pages !== totalpages && (
            <button
              onClick={() => handlePageChange(pages + 1)}
              className=" border p-2"
            >
              next
            </button>
          )}
        </div>
        <p>{loading ? "Loading..." : `page ${pages} out of ${totalpages}`}</p>
      </div>
    </div>
  );
};

export default Footer;

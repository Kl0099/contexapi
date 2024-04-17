import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Appcontext";

const Blogs = () => {
  //consume data ffrom context
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
  useEffect(() => {
    fetchBlogs(pages);
    console.log("calling ");
  }, []);
  useEffect(() => {
    if (posts) {
      console.log("posts : ", posts);
    }
  }, [posts]);

  return (
    <div className="  max-w-[960px] mx-auto">
      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          {posts.map((item, index) => (
            <div
              key={index}
              className=" my-5"
            >
              <p className=" text-xl font-semibold">{item.title}</p>

              <p>{`By ${item.author} on ${item.category}`}</p>

              <p>{`Posted on ${item.date}`}</p>
              <p className=" my-5">{item.content}</p>
              <div className=" flex gap-2 ">
                {item.tags.map((tag, i) => (
                  <p
                    key={i}
                    className=" text-blue-600 font-semibold flex gap-2"
                  >{`#${tag}`}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;

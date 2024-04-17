// create context
import { createContext, useState } from "react";
import { baseUrl } from "../constants/BaseUrl";
export const AppContext = createContext();

function AppconstextProvider({ children }) {
  // define all states and methods
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalpages, setTotalpages] = useState(null);

  //data fetching
  async function fetchBlogs(page = 1) {
    setLoading(true);
    try {
      let url = `${baseUrl}?page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data.posts);
      setPages(data.page);
      setTotalpages(data.totalPages);
    } catch (error) {
      console.log("error while fetching data : ", error.message);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPages(page);
    fetchBlogs(page);
  }

  const values = {
    loading,
    setLoading,
    posts,
    setPosts,
    pages,
    setPages,
    totalpages,
    setTotalpages,
    fetchBlogs,
    handlePageChange,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppconstextProvider;

import React, { useContext } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { AppContext } from "./context/Appcontext";
function App() {
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
  return (
    <div className=" mx-auto ">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

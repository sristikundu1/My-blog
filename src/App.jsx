import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import ReadBlogList from "./components/ReadBlogList/ReadBlogList";
import {
  addBlogsToLocalstorage,
  getBlogFromLocalstorage,
  removeBlogFromLocalstorage,
} from "./components/utilites/Localstorage";

// fetch blog json data
const blogPromises = fetch("blogs.json").then((res) => res.json());

function App() {
  const [readBlog, setReadBlog] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  // click bookmark button
  const handleMarkedBlog = (blog) => {
    const newReadBlog = [...readBlog, blog];
    setReadBlog(newReadBlog);

    // Store blog id in localStorage
    addBlogsToLocalstorage(blog.id);
  };

  //  Get bookmarked IDs from localStorage
  const storedBlogsIds = getBlogFromLocalstorage();

  // Filter blogs to show only bookmarked blogs
  const bookmarkedBlogs = readBlog.filter((blog) =>
    storedBlogsIds.includes(blog.id),
  );

  console.log(bookmarkedBlogs.id)

  // remove from bookmark and show the readtime 
  const handleMarkAsReadAndRemove = (time, id) => {
    setTotalReadingTime(totalReadingTime + time);

    // remove from ui and localstorage 
    const remainingBlog = readBlog.filter((blog) => blog.id != id);
    setReadBlog(remainingBlog);
    removeBlogFromLocalstorage(id);
  };

  return (
    <>
      <Navbar />

      <div className="w-9/12 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {/* left side blogs  */}
          <div className="md:col-span-3">
            <Suspense fallback={<h2>Blogs Data are loading ........</h2>}>
              <Blogs
                blogPromises={blogPromises}
                handleMarkedBlog={handleMarkedBlog}
                handleMarkAsReadAndRemove={handleMarkAsReadAndRemove}
                readBlog={readBlog}
              ></Blogs>
            </Suspense>
          </div>

          {/* right side selected blogs  */}
          <div className="md:col-span-1 py-6">
            <h1 className="border border-[#6047EC] rounded-lg bg-[#6047EC]/10 text-[#6047EC] text-lg mb-3 font-bold py-5 px-6">
              Spent time on read : <span>{totalReadingTime}</span> min
            </h1>

            <div className="rounded-lg bg-[#111111]/5 p-5">
              <h1 className="text-[#111111] text-xl font-bold text-left">
                Bookmarked Blogs : <span>{bookmarkedBlogs.length}</span>
              </h1>

              {bookmarkedBlogs.map((blog) => (

                <ReadBlogList key={blog.id} blog={blog}></ReadBlogList>

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ blogPromises,handleMarkedBlog }) => {
  // Reads the value of a Promise
  const blogs = use(blogPromises);

  return (
    <div className="py-6">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkedBlog={handleMarkedBlog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;

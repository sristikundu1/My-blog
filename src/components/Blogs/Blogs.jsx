import React, { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ blogPromises,handleMarkedBlog,handleMarkAsReadAndRemove,readBlog }) => {
  // Reads the value of a Promise
  const blogs = use(blogPromises);

  return (
    <div className="py-6">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkedBlog={handleMarkedBlog}
          handleMarkAsReadAndRemove={handleMarkAsReadAndRemove}
          isBookmarked={readBlog.some(b => b.id === blog.id)}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;

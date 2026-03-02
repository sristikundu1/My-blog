import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = ({ blog, handleMarkedBlog, handleMarkAsReadAndRemove }) => {
  // destructure the data
  const {
    id,
    cover,
    title,
    author,
    author_img: authorImg,
    posted_date: postedDate,
    reading_time: readingTime,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-full h-auto object-contain"
        src={cover}
        alt="blog_img"
      />
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-center items-center gap-2">
          <img className="w-14 h-14" src={authorImg} alt="author_Img" />
          <div>
            <h1 className="text-2xl font-bold text-left">{author}</h1>
            <p className="text-[rgba(17,17,17,0.6)] font-semibold text-left">
              {postedDate}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[rgba(17,17,17,0.6)] text-[20px] font-medium leading-6 text-right">
            {readingTime} min read{" "}
            <FontAwesomeIcon
              onClick={() => handleMarkedBlog(blog)}
              icon={faBookmark}
            />
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold leading-[160%] text-left text-[#111111]">
        {title}
      </h2>
      <div className="py-2">
        {hashtags.map((hashtag, index) => (
          <span
            className="text-[rgba(17,17,17,0.6)] text-xl font-medium text-left mr-3"
            key={index}
          >
            #{hashtag}
          </span>
        ))}
      </div>

      <button
        onClick={() => handleMarkAsReadAndRemove(readingTime,id)}
        className="text-[#6047EC] underline"
      >
        mark as read
      </button>
    </div>
  );
};

export default Blog;

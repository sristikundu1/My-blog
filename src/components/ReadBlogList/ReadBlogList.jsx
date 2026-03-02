import React from 'react';

const ReadBlogList = ({blog}) => {
    const {cover,title,author,author_img:authorImg,posted_date:postedDate,reading_time:readingTime,hashtags} = blog;
    return (
        <div>

            <div>
               
            </div>
            <div className="my-4 p-3 rounded-lg bg-white text-[#111111] text-sm font-semibold leading-[160%] text-left">

               
                <h3 className="font-bold">{title}</h3>
                
              </div>
        </div>
    );
};

export default ReadBlogList;
// get the data from localstorage 
const getBlogFromLocalstorage = () =>{
    const bookMarkedBlogs = localStorage.getItem('Bookmarked');

    if(bookMarkedBlogs){
        const storeBlog = JSON.parse(bookMarkedBlogs);
        return storeBlog
    }

    return [];
}


// save data in localstorage 

const saveBlogInLocalstorage = (Bookmarked) =>{
const bookmarkedString = JSON.stringify(Bookmarked);
localStorage.setItem('Bookmarked', bookmarkedString)
}

const addBlogsToLocalstorage = (id) =>{
const bookmarkedBlogs = getBlogFromLocalstorage();
const newBlogs = [...bookmarkedBlogs,id];
saveBlogInLocalstorage(newBlogs);
}

export{getBlogFromLocalstorage,addBlogsToLocalstorage}
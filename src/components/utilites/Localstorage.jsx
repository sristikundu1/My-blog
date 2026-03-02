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

// remove from local storage 
const removeBlogFromLocalstorage = id =>{
    const storeBlog = getBlogFromLocalstorage();
    const remaining = storeBlog.filter(storeId => storeId != id)
    saveCartToLocalstorage(remaining)
}


// add to localstorage 
const addBlogsToLocalstorage = (id) =>{
const bookmarkedBlogs = getBlogFromLocalstorage();
const newBlogs = [...bookmarkedBlogs,id];
saveBlogInLocalstorage(newBlogs);
}

export{getBlogFromLocalstorage,addBlogsToLocalstorage,removeBlogFromLocalstorage}
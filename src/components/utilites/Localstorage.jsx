// get the data from localstorage 
const getBlogFromLocalstorage = () =>{
    const bookMarkedBlogs = localStorage.getItem('Bookmarked');

    if(bookMarkedBlogs){
        const storeBlog = JSON.parse(storeBlog);
        return storeBlog
    }

    return [];
}
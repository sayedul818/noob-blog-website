import { useEffect, useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-3/5 shadow-lg m-10 p-4 rounded-md shadow-gray-500">
            {
                blogs.map(blog=>
                    <Blog key={blog.ID} blog={blog} handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blog>
                )
            }
            
        </div>
    );
};
Blogs.propTypes={
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blogs;
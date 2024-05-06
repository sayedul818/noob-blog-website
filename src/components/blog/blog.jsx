import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
    const {ID,Cover_Image,Author,Author_Image,Posted_Date,Reading_Time,Title,Hashtags}=blog;
    return (
        <div className="">
            <img className="coverImage w-full  rounded-md mt-10" src={Cover_Image} alt="" />
                <div className='flex justify-between mb-4 mt-4'>
                   <div className='flex '>
                      <img className="author_img  rounded-full  w-12 h-12" src={Author_Image} alt="" />
                      <div className='mx-2'>
                        <h6 className='author  font-bold'>{Author}</h6>
                        <p className='posted-date'>{Posted_Date}</p>
                      </div>
                   </div>
                    <div className=''>
                      <span className='mr-4 '>{Reading_Time} min read</span>
                      <button onClick={()=>handleBookmarks(blog)} className='text-2xl relative mt-2'><FaBookmark></FaBookmark></button>
                   </div>
                </div>
            <h2 className='title   text-2xl font-bold  '>{Title}</h2>
            <p className=' '>{Hashtags}</p>
            <button className='mt-2 underline text-fuchsia-500' onClick={()=>handleMarkAsRead(ID,Reading_Time)}>Mark as Read</button>
            <hr className='mt-6'></hr>          
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;
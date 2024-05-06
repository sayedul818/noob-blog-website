import PropTypes from 'prop-types'
import Bookmark from '../bookmark/bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
          <div className='w-2/5'> 
             <h2 className='text-center shadow-lg m-10 p-4 rounded-md shadow-gray-500 text-lg font-bold bg-cyan-500'>spent time on read : <span>{readingTime}</span> min</h2>
             <div className=' shadow-lg m-10 p-4 rounded-md shadow-gray-500'>
                 <h2 className='text-xl font-bold text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
                 {
                     bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark} readingTime={readingTime}></Bookmark>)
                 }
             </div>
         </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;
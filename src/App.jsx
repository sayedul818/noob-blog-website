import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks/bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime,setReadingTime]=useState(0)
 const handleBookmarks=(blog)=>{
   const newBookmarks=[...bookmarks,blog];
   setBookmarks(newBookmarks);
  }
  const handleMarkAsRead=(id,time)=>{
    setReadingTime(readingTime+time);
    // console.log("readin id",id)
    const removeBookmark=bookmarks.filter(bookmark=>bookmark.ID!==id);
    setBookmarks(removeBookmark);
  }

  return (
    <>
        <Header></Header>
        <div className='flex'>
            <Blogs  handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
            
        </div>
    </>
  )
}


export default App

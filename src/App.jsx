
import { useState } from 'react'
import './App.css'
import './animation.css'
import Bolgs from './componats/Blogs/Bolgs'
import Navbar from './componats/navbar/Navbar'


function App() {
  const [bookmarked , setbookmarked] = useState([]);
  const [readingCount , setReadingCount] = useState(0);
  

  const handeleAddBookmark = (bolg)=>{
  setbookmarked([...bookmarked , bolg])
  }

  const handelMarkAsRead = (time , id )=>{
   const newReadingCount = readingCount+ time;
   setReadingCount(newReadingCount);
   handelRemoveFromBookMark(id);

  }
  const handelRemoveFromBookMark = (id) =>{
    const remaingaBookMark = bookmarked.filter((mark)=> mark.id !==id);
    setbookmarked(remaingaBookMark);

  }
  
  return (
    <>
      
      <div className='container'>


      <Navbar ></Navbar>
      

      <div className="mainContainer  flex text-center">
        <div className="leftContainer w-[70%] ">
        

        <Bolgs  handeleAddBookmark={handeleAddBookmark} handelMarkAsRead={handelMarkAsRead}></Bolgs>
        </div>
        <div className="rightContainer w-[30%] mt-15 " >
            <h1 className='text-2xl font-extrabold text-white rounded  bg-gray-400 p-3 opacity-70  '>reading time : {readingCount} </h1>
            <h1 className='text-2xl font-extrabold text-white mt-4 rounded bg-gray-400 p-3 opacity-70 '>bookmark count : {bookmarked.length}</h1>
            {
              bookmarked.map(marked => <p key={marked.id} className='bg-gray-600 rounded p-2 shadow m-4 text-white'> {marked.title}</p>)
            }
        </div>
      </div>


      </div>
      
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import Bolg from './Bolg';


const Bolgs = ({handeleAddBookmark ,handelMarkAsRead}) => {
    const [bolgs , setBolgs] = useState([]);
const text = "TOTAL :"+bolgs.length;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timeout;

    if (show) {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setShow(false);
        }, 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setShow(true);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [index, show]);


    


    useEffect(()=>{
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBolgs(data))
    },[])

    

    return (
        <div className=''>
            <h1 className='text-5xl text-white font-extrabold  '>{displayedText}</h1>
            <div className="allBlogs ">
                {
                    bolgs.map(bolg => <Bolg key={bolg.id} bolg={bolg} handeleAddBookmark={handeleAddBookmark} handelMarkAsRead={handelMarkAsRead}></Bolg>)
                }
            </div>

            <h1 className="text-xl text-center font-mono">
      {displayedText} hjbrl
      <span className="animate-pulse">|</span>
    </h1>


        </div>
    );
};

export default Bolgs;
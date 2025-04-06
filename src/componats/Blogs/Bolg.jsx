import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Bolg = ({bolg , handeleAddBookmark ,handelMarkAsRead}) => {
    
    return (
        <div className='mt-5'>
            
            {/* card section */}

            <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img className='w-full'
      src={bolg.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body  shadow-2xl ">
    <div className='author flex justify-around items-center'>
        <h3 className='text-2xl text-gray-600 font-bold'>{bolg.author}</h3>
        <img className='w-16' src={bolg.author_img} alt="" />
        <button onClick={()=>handeleAddBookmark(bolg)}><FaBookmark  size={25} /></button>
    </div>
    <div className=' text-center justify-center  items-center mt-5'>
    <h2 className=" text-center mx-0 mx-auto text-2xl font-bold  text-black">{bolg.title}</h2>
    <p className='text-center text-xl font-semibold text-gray-400 '>A card component has a figure, <br></br> a body part, and inside body there are title and actions parts</p>
    </div>
    <div className='flex mt-5'>
    {
        bolg.hashtags.map(has => <p className='text-xl font-bold text-gray-600' key={has}>{has}</p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handelMarkAsRead(bolg.reading_time , bolg.id)} className="btn btn-primary mt-5 ">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bolg;
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Cards from "../components/Cards";

import axios from 'axios';
const Course = () => {
  const [book,setBook]= useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);



  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className="mt-20 items-center justify-center text-center">
   <h1 className="text-2xl md:text-4xl ">We're delighted to have you <span className='text-pink-500'>Here! :)</span>
   </h1>
   <p className='mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat totam minus sint debitis nostrum ratione voluptates ipsa, perspiciatis corrupti eos, repudiandae vitae sunt dolorum mollitia libero nesciunt exercitationem labore asperiores?</p> 
   <Link to='/'>
   <button className='mt-6 bg-pink text-white px-4 py-2 mt-4 rounded-md hover:bg-pink-700 duration-300'>Back</button>
   </Link>
</div>
<div className="mt-12  grid grid-cols-1 md:grid-cols-4 cursor-pointer">
    {
book.map((item)=>(
<Cards key={item.id} item={item}/>))
    }
</div>
    </div>
    </>
  )
}

export default Course;
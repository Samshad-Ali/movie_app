import React from 'react'
import defaultImg from '../assets/download.jpeg';
const Moviecard = ({data}) => {
  return (
    <div className='flex flex-col gap-2 w-[250px] h-[310px] cursor-pointer transition-all duration-300 hover:scale-105 bg-black  rounded-md p-2'>
    <img className='rounded-md w-full h-[240px] object-cover' src={ data.moviemainphotos ? data.moviemainphotos : defaultImg} alt="movie-photo" />
    <h2 className='font-semibold text-lg'> {data.movietitle}</h2>
    </div>
  )
}

export default Moviecard
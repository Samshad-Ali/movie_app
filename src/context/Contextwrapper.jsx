import React, { createContext, useEffect, useState } from 'react'
import data from '../assets/data.json';
export const movieContext = createContext();
const Contextwrapper = ({children}) => {
    const [moviesdata, setMoviesdata] = useState([]);
    useEffect(() => {
        setMoviesdata(data);
      }, []);
    return (
   <movieContext.Provider value={{
    moviesdata,setMoviesdata
   }}>
{children}
   </movieContext.Provider>
  )
}

export default Contextwrapper
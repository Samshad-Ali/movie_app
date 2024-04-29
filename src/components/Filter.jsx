import React, { useContext } from "react";
import { genres, countries, languages } from "../utils/filterData";
import Optionselector from "./Optionselector";
import { movieContext } from "../context/Contextwrapper";
import data from "../assets/data.json";
const Filter = () => {
  const { moviesdata, setMoviesdata } = useContext(movieContext);
  const handleGenre = (e) => {
    if (e.target.value !== "Genre") {
      let newData = moviesdata.filter((item) =>
        item.moviegenres.includes(e.target.value)
      );
      setMoviesdata(newData);
    } else {
      setMoviesdata(data);
    }
  };
  const handleLanguage = (e) => {
    if (e.target.value !== "Language") {
      let newData = moviesdata.filter((item) =>
        item.movielanguages.includes(e.target.value)
      );
      setMoviesdata(newData);
    } else {
      setMoviesdata(data);
    }
  };
  const handleCountry = (e) => {
    if (e.target.value !== "Country") {
      let newData = moviesdata.filter((item) =>
        item.moviecountries.includes(e.target.value)
      );
      setMoviesdata(newData);
    } else {
      setMoviesdata(data);
    }
  };
  return (
    <div className=" h-auto gap-1 sm:h-20  flex flex-wrap justify-between items-center px-4 p-2">
      <p>Filter movies according to choice</p>
      <div className="w-full flex-wrap flex items-center justify-between gap-2">
        <Optionselector title="Genre" handler={handleGenre} data={genres} />

        <Optionselector
          title="Language"
          handler={handleLanguage}
          data={languages}
        />

        <Optionselector
          title="Country"
          handler={handleCountry}
          data={countries}
        />
      </div>
    </div>
  );
};

export default Filter;

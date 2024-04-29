import Navbar from "./components/Navbar";
import Moviecard from "./components/Moviecard";
import Filter from "./components/Filter";
import { useContext } from "react";
import { movieContext } from "./context/Contextwrapper";
const App = () => {

  const {moviesdata} = useContext(movieContext);
  return (
      <div className=" h-screen text-secndryClr">
        <Navbar />
        <Filter
        />
        <div className=" h-auto sm:h-[calc(100%-144px)] overflow-auto sm:overflow-y-auto p-4 flex justify-center items-center flex-wrap  gap-4 w-full">
          {moviesdata.length > 0 ? (
            moviesdata?.map((item) => (
              <Moviecard key={item.imdbmovieid} data={item} />
            ))
          ) : (
            <p className="bg-secndryClr text-primaryClr font-semibold p-2 rounded-md">Movies Not Found...</p>
          )}
        </div>
      </div>
  );
};

export default App;

import { useNavigate } from "react-router-dom";

import CharactersImg from "../images/rick-and-morty-characters.png";
import LocationsImg from "../images/rick-and-morty-locations.png";
import EpisodesImg from "../images/rick-and-morty-episodes.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mt-16">
        <div
          className="w-[20rem] mx-auto mt-10 lg:mt-5 xl:w-[27rem] border-4 rounded-xl border-slate-800 relative cursor-pointer hover:scale-[1.1] transition ease-in-out delay-150"
          onClick={() => navigate("/characters")}
        >
          <img
            src={CharactersImg}
            alt="characters"
            className="w-full rounded-xl"
          />
          <label className="absolute bottom-0 w-full text-center bg-black/80 text-white py-2 cursor-pointer ">
            Characters
          </label>
        </div>

        <div
          className="w-[20rem] mx-auto mt-5 xl:w-[27rem] border-4 rounded-xl border-slate-800 relative cursor-pointer hover:scale-[1.1] transition ease-in-out delay-150"
          onClick={() => navigate("/locations")}
        >
          <img
            src={LocationsImg}
            alt="characters"
            className="w-full rounded-xl"
          />
          <label className="absolute bottom-0 w-full text-center bg-black/80 text-white py-2 cursor-pointer ">
            Locations
          </label>
        </div>

        <div
          className="w-[20rem] mx-auto mt-5 xl:w-[27rem] border-4 rounded-xl border-slate-800 relative cursor-pointer hover:scale-[1.1] transition ease-in-out delay-150"
          onClick={() => navigate("/episodes")}
        >
          <img
            src={EpisodesImg}
            alt="characters"
            className="w-full rounded-xl"
          />
          <label className="absolute bottom-0 w-full text-center bg-black/80 text-white py-2 cursor-pointer ">
            Episodes
          </label>
        </div>
      </div>
    </>
  );
};

export default Home;

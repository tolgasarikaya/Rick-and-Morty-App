import { useLoaderData } from "react-router-dom";
import EpisodeCharacters from "./EpisodeCharacters";
const EpisodeDetail = () => {
  const data = useLoaderData();
  return (
    <main>
      <h1 className="flex flex-col text-center mt-3 text-xl font-bold text-green-600">
        {data.episode} <span className="font-semibold">{data.name}</span>
      </h1>
      <p className="text-center m-3">
        <span className="text-green-600">Release date: </span>
        {data.air_date}
      </p>
      <p className="text-center text-green-600 font-bold underline">
        Characters In This Episode
      </p>
      <EpisodeCharacters characters={data.characters} />
    </main>
  );
};

export default EpisodeDetail;

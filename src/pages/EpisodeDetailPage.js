import { json } from "react-router-dom";
import EpisodeDetail from "../components/EpisodeDetail";

const EpisodeDetailPage = () => {
  return <EpisodeDetail />;
};

export default EpisodeDetailPage;

export async function loader({ params }) {
  const id = params.episodeId;
  const response = await fetch("https://rickandmortyapi.com/api/episode/" + id);
  if (!response.ok) {
    return json(
      { message: "Could not fetch the details fro the selected episode!" },
      { status: 500 }
    );
  }
  return response;
}

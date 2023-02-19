import { json } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";

const CharacterDetailPage = () => {
  return <CharacterDetail />;
};

export default CharacterDetailPage;

export async function loader({ params }) {
  const id = params.characterId;
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + id
  );
  if (!response.ok) {
    return json(
      { message: "Could not fetch details for the selected character." },
      { status: 500 }
    );
  }
  return response;
}

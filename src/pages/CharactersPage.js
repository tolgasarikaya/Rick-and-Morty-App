import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { curPageActions } from "../store/curPage";

import Characters from "../components/Characters/Characters";
import CurrentPage from "../components/CurrentPage/CurrentPage";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  params.page && dispatch(curPageActions.buttonClick(Number(params.page)));

  const characters = useLoaderData();
  return (
    <>
      <Characters characters={characters} />
      <CurrentPage />
    </>
  );
};
export default CharactersPage;

export async function fetchCharacters(curPage) {
  const charDatas = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${curPage}`
  );
  const jsonChars = await charDatas.json();
  const charsResult = jsonChars.results;
  return charsResult;
}

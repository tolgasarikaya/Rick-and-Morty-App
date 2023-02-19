import Episodes from "../components/Episodes";

const EpisodesPage = () => {
  return <Episodes />;
};

export default EpisodesPage;

export async function loader() {
  let arr = [];
  let i = 1;
  while (true) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${i}`
    );
    const response = await data.json();
    arr = arr.concat(response.results);
    i += 1;
    if (response.info.next === null) break;
  }
  return arr;
}

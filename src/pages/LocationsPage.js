import { json } from "react-router-dom";
import Locations from "../components/Locations";

const LocationsPage = () => {
  return <Locations />;
};

export default LocationsPage;

export async function loader() {
  /* let id = 1;
  let arr = [];
  while (true) {
    const response = await fetch(
      "https://rickandmortyapi.com/api/location?page=" + id
    );
    if (!response.ok) {
      return json(
        { message: "Could not fetch details for the selected character." },
        { status: 500 }
      );
    }
    arr = arr.concat(response.results);
    if (response.info.next === null) break;
    id += 1;
  }
  return arr; */
  /* 
  const response = await fetch(
    "https://rickandmortyapi.com/api/location?page=2"
  );
  if (!response.ok) {
    return json(
      { message: "Could not fetch details for the selected character." },
      { status: 500 }
    );
  }
  return response; */
  let id = 1;
  let arr = [];
  while (id <= 7) {
    const response = await fetch(
      "https://rickandmortyapi.com/api/location?page=" + id
    );
    const data = await response.json();
    arr = arr.concat(data.results);
    id += 1;
  }
  return arr;
}

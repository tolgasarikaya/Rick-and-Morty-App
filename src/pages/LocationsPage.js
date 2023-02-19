import Locations from "../components/Locations";

const LocationsPage = () => {
  return <Locations />;
};

export default LocationsPage;

export async function loader() {
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

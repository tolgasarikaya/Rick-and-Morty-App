import { useEffect, useState } from "react";
import Residents from "./Residents";
const LocationDetail = (props) => {
  const [fetchedLocation, setFetchedLocation] = useState("");
  const [characterUrl, setCharacterUrl] = useState("");
  const [fetching, setFetching] = useState(false);

  const arr = [];

  async function fetchLocation() {
    setFetching(false);
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/location/` + props.locationId
      );
      const response = await data.json();
      setFetchedLocation(response);

      response.residents.forEach((element) => {
        arr.push(...element.split("/").slice(-1));
      });
      setCharacterUrl("https://rickandmortyapi.com/api/character/" + arr);
      setFetching(true);

      return response;
    } catch (error) {
      console.log(error);
    }
    fetchLocation();
  }
  useEffect(() => fetchLocation, [props.locationId]);

  console.log(characterUrl);
  /* async function fetchCharacters() {
    try {
      const data = await fetch(`${characterUrl}`);

      const response = await data.json();
      setFetchedResidents(response);
      return response;
    } catch (err) {
      console.log(err);
    }
    fetchCharacters();
  }
  useEffect(() => fetchCharacters, [characterUrl]); */

  //console.log(fetchedResidents);

  return (
    <div>
      <p className="text-center mt-3 text-lg font-bold text-green-600 mb-4">
        {fetchedLocation.name}
      </p>
      <p className="text-center">
        <span className="text-green-600 font-semibold">Type: </span>
        {fetchedLocation.type}
      </p>
      <p className="text-center">
        <span className="text-green-600 font-semibold">Dimension: </span>
        {fetchedLocation.dimension}
      </p>
      <p className="text-green-600 font-bold text-center underline my-3">
        Residents Of This Location:
      </p>
      <>{fetching && <Residents characterUrl={characterUrl} />}</>
    </div>
  );
};

export default LocationDetail;

import { json } from "react-router-dom";
import LocationDetail from "../components/LocationDetail";

const LocationDetailPage = () => {
  return <LocationDetail />;
};

export default LocationDetailPage;

export async function loader({ params }) {
  const id = params.locationId;
  const response = await fetch(
    "https://rickandmortyapi.com/api/location/" + id
  );
  if (!response.ok) {
    return json(
      { message: "Could not fetch details for the selected location." },
      { status: 500 }
    );
  }
  return response;
}

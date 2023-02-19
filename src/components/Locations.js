import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import LocationDetail from "./LocationDetail";
const Locations = () => {
  const [curLocation, setCurLocation] = useState("");
  const [locationId, setLocationId] = useState(null);
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {curLocation === "" && (
        <>
          <h1 className="font-bold text-lg text-green-600 text-center mt-3">
            Choose a Location...
          </h1>
          <div className="grid grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-5">
            {data.map((loc, i) => (
              <button
                key={i}
                className="bg-[#d6d6cd] m-2 py-0.5 hover:cursor-pointer rounded hover:font-semibold"
                onClick={() => {
                  setCurLocation(loc.name);
                  setLocationId(i + 1);
                }}
              >
                {loc.name}
              </button>
            ))}
          </div>
        </>
      )}
      {locationId && (
        <LocationDetail
          curLocation={curLocation}
          setCurLocation={setCurLocation}
          locationId={locationId}
        />
      )}
    </>
  );
};

export default Locations;

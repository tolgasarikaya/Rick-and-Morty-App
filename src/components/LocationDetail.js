import { useLoaderData } from "react-router-dom";

import Residents from "./Residents";
const LocationDetail = () => {
  const res = useLoaderData();
  return (
    <>
      <p className="text-center mt-3 text-lg font-bold text-green-600 mb-4">
        {res.name}
      </p>
      <p className="text-center">
        <span className="text-green-600 font-semibold">Type: </span>
        {res.type}
      </p>
      <p className="text-center">
        <span className="text-green-600 font-semibold">Dimension: </span>
        {res.dimension}
      </p>
      <p className="text-green-600 font-bold text-center underline my-3">
        Residents Of This Location:
      </p>
      <Residents residents={res.residents} />
    </>
  );
};

export default LocationDetail;

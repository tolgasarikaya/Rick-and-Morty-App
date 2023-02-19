import { useLoaderData } from "react-router-dom";

const CharacterDetail = () => {
  const data = useLoaderData();
  return (
    <>
      <img
        src={data.image}
        alt="corresponding character"
        className="w-80 mt-8 mx-auto rounded-2xl md:w-96"
      />
      <div className="flex flex-col gap-1 w-64 mx-auto mt-5 rounded-2xl p-3 bg-[#d6d6cd]">
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Name: </span>
          {data.name}
        </p>
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Status: </span>
          {data.status}
        </p>
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Species: </span>
          {data.species}
        </p>
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Type: </span>
          {data.type === "" ? "undefined" : data.type}
        </p>
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Gender: </span>
          {data.gender}
        </p>
        <p className="inline-block">
          <span className="text-green-600 font-semibold">Origin: </span>
          {data.origin.name}
        </p>
      </div>
    </>
  );
};

export default CharacterDetail;

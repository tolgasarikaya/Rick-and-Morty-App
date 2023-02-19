import { useLoaderData, useNavigate } from "react-router-dom";
const Episodes = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  return (
    <main>
      <h1 className="text-green-600 font-bold text-lg my-3 text-center">
        Episodes
      </h1>
      <div className="grid grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-5  gap-5 mx-5">
        {data.map((el, i) => {
          return (
            <div
              className="bg-[#d6d6cd] shadow-md text-center inline-block rounded-2xl hover:font-semibold hover:cursor-pointer"
              onClick={() => navigate(`${i + 1}`)}
              key={i}
            >
              <p className="text-green-600">{el.episode}</p>
              <p className="text-gray-900">{el.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Episodes;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Characters = (props) => {
  const [fetchedCharacters, setFetchedCharacters] = useState(null);
  const navigate = useNavigate();
  console.log(props.input);
  let url = `https://rickandmortyapi.com/api/character/?page=${props.curPage}&name=${props.name}&status=${props.input.Status}&gender=${props.input.Gender}&species=${props.input.Species}`;

  useEffect(() => {
    (async function () {
      try {
        const callForAllCharacter = await fetch(url);
        const characters = await callForAllCharacter.json();
        setFetchedCharacters(characters);
        props.setMaxPage(characters?.info?.pages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url, props]);

  return (
    <main className="z-0 grid grid-cols-2 gap-5 m-5 justify-items-center min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-5">
      {fetchedCharacters !== null &&
        fetchedCharacters?.results?.map((char, i) => {
          let statusColor = "";
          if (char.status === "Alive") {
            statusColor = "bg-blue-500";
          } else if (char.status === "Dead") {
            statusColor = "bg-red-500";
          } else {
            statusColor = "bg-gray-700";
          }
          return (
            <div
              key={i}
              className=" w-[150px] min-[500px]:w-[200px] relative cursor-pointer hover:scale-110 transition ease-in-out delay-150"
              onClick={() => navigate(`${char.id}`)}
            >
              <img
                src={char.image}
                alt={`${char.name}'s drawing`}
                className="border-[#d6d6cd] border-4 rounded-xl "
              />
              <p className="absolute bottom-0 left-0 right-0 bg-[#d6d6cd]/90 text-center text-green-700 font-medium rounded-b-lg">
                {char.name}
              </p>
              <p
                className={
                  `absolute top-2 left-2 py-0.5 px-1 text-sm rounded-lg text-white ` +
                  statusColor
                }
              >
                {char.status}
              </p>
            </div>
          );
        })}
    </main>
  );
};

export default Characters;

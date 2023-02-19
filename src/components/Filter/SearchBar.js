import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = (props) => {
  const [input, setInput] = useState();

  const inputNameHandler = (event) => {
    event.preventDefault();
    props.setName(input);
  };

  return (
    <label
      htmlFor="input"
      className={`relative flex flex-col ${props.className}`}
    >
      <IoIosSearch size={20} className="absolute top-2 left-2  text-gray-600" />
      <input
        id="input"
        type="text"
        placeholder="Enter a name"
        className={`border-2 border-slate-100 rounded-lg py-1 focus:outline-none focus:shadow-md focus:border-slate-300 w-full md:w-full text-center`}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        type="submit"
        className=" text-green-600 w-1/3 mx-auto font-semibold bg-[#d6d6cd] rounded-lg hover:font-bold"
        onClick={inputNameHandler}
      >
        Search
      </button>
    </label>
  );
};

export default SearchBar;

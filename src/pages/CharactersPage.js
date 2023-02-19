import { useState } from "react";

import Characters from "../components/Characters";
import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";

const CharactersPage = () => {
  const [curPage, setCurPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [name, setName] = useState("");
  const [input, setInput] = useState({ Status: "", Species: "", Gender: "" });
  return (
    <>
      <Filter name={name} setName={setName} input={input} setInput={setInput} />
      <Characters
        curPage={curPage}
        setCurPage={setCurPage}
        setMaxPage={setMaxPage}
        maxPage={maxPage}
        name={name}
        setName={setName}
        input={input}
        setInput={setInput}
      />
      <Pagination curPage={curPage} setCurPage={setCurPage} maxPage={maxPage} />
    </>
  );
};

export default CharactersPage;

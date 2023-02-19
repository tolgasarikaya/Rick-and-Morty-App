import { useState, useRef } from "react";

import { AiOutlineDown } from "react-icons/ai";

const Dropdown = (props) => {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const catMenu = useRef(null);
  const closeOpenMenus = (e) => {
    if (
      catMenu.current &&
      dropdownDisplay &&
      !catMenu.current.contains(e.target)
    ) {
      setDropdownDisplay(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  const dropdownHandler = () => {
    setDropdownDisplay((dropdownDisplay) => !dropdownDisplay);
  };

  const inputHandler = (el) => {
    const title = props.title;

    props.setInput((existing) => {
      existing[title] = el;
      return { ...existing };
    });

    setDropdownDisplay(false);
  };

  return (
    <div ref={catMenu} className={`relative z-10`}>
      <button
        className={`bg-[#d6d6cd] font-semibold text-green-600 py-0.5 w-24 md:w-36 flex flex-row items-center justify-center gap-2 md:gap-4 `}
        onClick={dropdownHandler}
      >
        {props.title}
        <AiOutlineDown className={!dropdownDisplay ? "" : "rotate-180"} />
      </button>
      <div
        className={`flex flex-col absolute -bottom-15 w-24 md:w-36 overflow-auto ${
          props.className
        } bg-[#f5f5eb] ${dropdownDisplay ? "" : "hidden"}`}
      >
        {props.elements.map((el, index) => (
          <button
            className="hover:ring-2 ring-[#d6d6cd] ring-inset"
            key={index}
            onClick={() => {
              inputHandler(el);
            }}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

import { NavLink, useNavigate } from "react-router-dom";

import logo from "../images/Rick_and_Morty.png";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#d6d6cd] flex flex-row items-center justify-between py-4">
      <img
        src={logo}
        alt="Rick and Morty Logo"
        className="w-[7rem] ml-5 cursor-pointer min-[750px]:w-[10rem] min-[750px]:ml-10"
        onClick={() => navigate("/")}
      />
      <nav className="justify-self-end text-[14px] min-[750px]:text-[18px]">
        <ul className="flex flex-row gap-2 mr-3 font-semibold text-green-600 min-[750px]:gap-10 min-[750px]:mr-10">
          <li className="hover:font-bold hover:underline hover:decoration-yellow-300 hover:decoration-4 hover:underline-offset-[5px]">
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline decoration-yellow-300 decoration-4 underline-offset-[5px]"
                  : undefined
              }
            >
              Characters
            </NavLink>
          </li>
          <li className="hover:font-bold hover:underline hover:decoration-yellow-300 hover:decoration-4 hover:underline-offset-[5px]">
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline decoration-yellow-300 decoration-4 underline-offset-[5px]"
                  : undefined
              }
            >
              Locations
            </NavLink>
          </li>
          <li className="hover:font-bold hover:underline hover:decoration-yellow-300 hover:decoration-4 hover:underline-offset-[5px]">
            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline decoration-yellow-300 decoration-4 underline-offset-[5px]"
                  : undefined
              }
            >
              Episodes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

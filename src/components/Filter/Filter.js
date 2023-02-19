import Dropdown from "./Dropdown";
import Label from "./Label";
import SearchBar from "./SearchBar";
import { RiCloseFill } from "react-icons/ri";

const Filter = (props) => {
  const closeLabelHandler = () => props.setName("");
  return (
    <>
      <div className="w-2/5 mx-auto mt-5">
        <SearchBar setName={props.setName} />
      </div>
      <div className="mx-auto grid grid-cols-2 shrink-0  justify-center mt-5 sm:w-96 ">
        {
          <>
            {props.name !== "" && (
              <>
                <div className="inline-block bg-green-600 font-semibold relative m-2">
                  <span className="inline-block text-[#d6d6cd] pl-1 pr-5 py-1">
                    name: {props.name}
                  </span>
                  <RiCloseFill
                    className="text-green-900 absolute top-0.5 right-0 hover:cursor-pointer"
                    onClick={closeLabelHandler}
                  />
                </div>
              </>
            )}
            {props.input.Status !== "" && (
              <Label item="Status" delete={props.setInput}>
                status: {props.input.Status}
              </Label>
            )}
            {props.input.Species !== "" && (
              <Label item="Species" delete={props.setInput}>
                species: {props.input.Species}
              </Label>
            )}
            {props.input.Gender !== "" && (
              <Label item="Gender" delete={props.setInput}>
                gender: {props.input.Gender}
              </Label>
            )}
          </>
        }
      </div>
      <div className="flex flex-row gap-4 justify-center mt-5">
        <Dropdown
          setInput={props.setInput}
          title="Status"
          elements={["Alive", "Dead", "Unknown"]}
        />
        <Dropdown
          setInput={props.setInput}
          title="Species"
          elements={[
            "Human",
            "Alien",
            "Humanoid",
            "Poopybutthole",
            "Mythological",
            "Animal",
            "Disease",
            "Robot",
            "Cronenberg",
            "Unknown",
          ]}
          className="h-28"
        />
        <Dropdown
          setInput={props.setInput}
          title="Gender"
          elements={["Female", "Male", "Genderless", "Unknown"]}
        />
      </div>
    </>
  );
};

export default Filter;

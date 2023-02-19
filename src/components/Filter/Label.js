import { RiCloseFill } from "react-icons/ri";
const Label = (props) => {
  const closeLabelHandler = () => {
    props.delete((existing) => {
      existing[props.item] = "";
      return { ...existing };
    });
  };

  return (
    <>
      <div className="inline-block bg-green-600 font-semibold relative m-2">
        <span className="inline-block text-[#d6d6cd] pl-1 pr-5 py-1">
          {props.children}
        </span>
        <RiCloseFill
          className="text-green-900 absolute top-0.5 right-0 hover:cursor-pointer"
          onClick={closeLabelHandler}
        />
      </div>
    </>
  );
};

export default Label;

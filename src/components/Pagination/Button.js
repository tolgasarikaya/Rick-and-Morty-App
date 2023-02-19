const Button = (props) => {
  return (
    <button
      className={`${
        props.curPage === Number(props.children) ? "bg-slate-300/50 " : ""
      }m-1 text-gray-800 hover:bg-slate-200/50 rounded-full py-2 my-5 ${
        Number(props.children) >= 10 ? "px-3" : "px-4"
      }`}
      onClick={() => props.setCurPage(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Button;

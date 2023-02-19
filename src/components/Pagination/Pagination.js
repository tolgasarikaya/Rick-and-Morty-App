import Button from "./Button";

const Pagination = (props) => {
  const arr1 = Array(5).fill(props.curPage);
  const arr2 = [-2, -1, 0, 1, 2];
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = arr1[i] + arr2[i];
  }
  arr = arr.filter((el) => el > 0 && el <= props.maxPage);

  const arrowLeftPageChangeHandler = () => {
    props.curPage !== 1 && props.setCurPage((cur) => cur - 1);
  };
  const arrowRightPageChangeHandler = () => {
    props.curPage !== props.maxPage && props.setCurPage((cur) => cur + 1);
  };

  return (
    <div className="flex justify-center">
      <button
        className="text-2xl text-gray-700 mr-2"
        onClick={arrowLeftPageChangeHandler}
      >
        &larr;
      </button>
      {arr.map((i) => (
        <Button curPage={props.curPage} setCurPage={props.setCurPage} key={i}>
          {i}
        </Button>
      ))}
      <button
        className="text-2xl text-gray-700 ml-2"
        onClick={arrowRightPageChangeHandler}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;

import Button from "./Button";

import { useDispatch } from "react-redux";
import { curPageActions } from "../../store/curPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CurrentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const maxPage = useSelector((state) => state.pageInfo.maxPage);

  const arrowLeftPageChangeHandler = () => {
    dispatch(curPageActions.leftArrowClick());
    navigate(`/characters/${curPage !== 1 ? curPage - 1 : curPage}`);
  };

  const arrowRightPageChangeHandler = () => {
    dispatch(curPageActions.rightArrowClick());
    navigate(`/characters/${curPage !== 42 ? curPage + 1 : curPage}`);
  };

  const arr = Array.from({ length: maxPage }, (_, i) => i + 1);

  return (
    <footer className="flex flex-row justify-center">
      <button
        className="text-2xl text-gray-700 mr-2"
        onClick={arrowLeftPageChangeHandler}
      >
        &larr;
      </button>
      {arr
        .filter((el) => el <= curPage + 2 && el >= curPage - 2)
        .map((el) => (
          <Button>{el}</Button>
        ))}
      <button
        className="text-2xl text-gray-700 ml-2"
        onClick={arrowRightPageChangeHandler}
      >
        &rarr;
      </button>
    </footer>
  );
};

export default CurrentPage;

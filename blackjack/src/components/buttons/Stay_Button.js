import { useDispatch, useSelector } from "react-redux";
import { nextUp } from "../../store";
import "./Buttons.css";

const Stay_Button = ({ dealerIsUp }) => {
  const dispatch = useDispatch();

  const userTurn = useSelector((state) => state.userTurn);
  const yourHandCalc = useSelector((state) => state.yourHandCalc);

  return (
    <button
      disabled={!userTurn || yourHandCalc >= 21}
      onClick={() => {
        dispatch(nextUp());
        dealerIsUp();
      }}
      className="stay-button"
    >
      Stay
    </button>
  );
};

export default Stay_Button;

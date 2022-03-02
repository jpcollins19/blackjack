import { useSelector, useDispatch } from "react-redux";
import { nextUp } from "../../store";
import "./Buttons.css";

const Next_Hand_Button = ({ startNextHand }) => {
  const userTurn = useSelector((state) => state.userTurn);
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        yourHandTotal <= 21 && dispatch(nextUp());
        startNextHand();
      }}
      disabled={!userTurn || yourHandTotal <= 21}
      className="next-hand-button"
    >
      Next Hand
    </button>
  );
};

export default Next_Hand_Button;

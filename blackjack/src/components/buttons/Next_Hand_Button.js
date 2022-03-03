import { useSelector, useDispatch } from "react-redux";
import { nextUp } from "../../store";
import "./Buttons.css";

const Next_Hand_Button = ({ startNextHand }) => {
  const handIsOver = useSelector((state) => state.handIsOver);
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        yourHandTotal <= 21 && dispatch(nextUp());
        startNextHand();
      }}
      disabled={!handIsOver}
      className="next-hand-button"
    >
      Next Hand
    </button>
  );
};

export default Next_Hand_Button;

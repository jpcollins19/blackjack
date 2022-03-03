import { useDispatch, useSelector } from "react-redux";
import { nextUp, dealerIsUpThunk } from "../../store";
import "./Buttons.css";

const Stay_Button = ({ nextCard, deck, dealerHand }) => {
  const dispatch = useDispatch();

  const dealComplete = useSelector((state) => state.dealComplete);
  const userTurn = useSelector((state) => state.userTurn);
  const yourHandCalc = useSelector((state) => state.yourHandCalc);

  return (
    <button
      disabled={!userTurn || yourHandCalc >= 21 || !dealComplete}
      onClick={() => {
        dispatch(nextUp());
        dispatch(dealerIsUpThunk(nextCard + 1, deck, dealerHand));
      }}
      className="stay-button"
    >
      Stay
    </button>
  );
};

export default Stay_Button;

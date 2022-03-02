import { useDispatch, useSelector } from "react-redux";
import { nextUp } from "../../store";
import "./Buttons.css";

const Stay_Button = ({ dealerIsUp }) => {
  const dispatch = useDispatch();

  const dealComplete = useSelector((state) => state.dealComplete);
  const userTurn = useSelector((state) => state.userTurn);
  const yourHandCalc = useSelector((state) => state.yourHandCalc);
  const dealerHandTotal = useSelector((state) => state.dealerHandCalc);
  const dealerHand = useSelector((state) => state.dealerHand);

  return (
    <button
      disabled={!userTurn || yourHandCalc >= 21 || !dealComplete}
      onClick={() => {
        dispatch(nextUp());

        setTimeout(() => {
          dealerIsUp();
          console.log("dealerHand", dealerHand);

          console.log("dealerHandTotal", dealerHandTotal);
        }, 4000);
      }}
      className="stay-button"
    >
      Stay
    </button>
  );
};

export default Stay_Button;

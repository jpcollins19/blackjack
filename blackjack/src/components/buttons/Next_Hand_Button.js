import { useSelector, useDispatch } from "react-redux";
import {
  usersTurn,
  dealersTurn,
  handOver,
  nextHandStarted,
  setGameMessage,
  handDealt,
  gameMessageRelayed,
  nextHandReady,
} from "../../store";
import "./Buttons.css";

const Next_Hand_Button = ({ startNextHand }) => {
  const nextHandIsReady = useSelector((state) => state.nextHandIsReady);
  const dealerTurn = useSelector((state) => state.dealerTurn);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setGameMessage(""));
        dispatch(usersTurn(false));
        dispatch(dealersTurn(false));
        startNextHand();
        dispatch(handOver(false));
        // dispatch(handDealt(false));
        dispatch(nextHandStarted(true));
        // dispatch(gameMessageRelayed(false));
        dispatch(nextHandReady(false));
      }}
      disabled={!nextHandIsReady}
      className="next-hand-button"
    >
      Next Hand
    </button>
  );
};

export default Next_Hand_Button;

import { useSelector } from "react-redux";
import "./Buttons.css";

const Next_Hand_Button = ({ startNextHand }) => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  return (
    <button
      onClick={() => startNextHand(true)}
      disabled={yourHandTotal < 21}
      className="next-hand-button"
    >
      Next Hand
    </button>
  );
};

export default Next_Hand_Button;

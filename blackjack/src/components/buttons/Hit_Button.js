import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Buttons.css";

const Hit_Button = ({ hit }) => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);
  const dealComplete = useSelector((state) => state.dealComplete);

  return (
    <button
      disabled={!userTurn || yourHandTotal >= 21 || !dealComplete}
      onClick={() => hit()}
      className="hit-button"
    >
      Hit
    </button>
  );
};

export default Hit_Button;

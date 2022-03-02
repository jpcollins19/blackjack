import { useSelector } from "react-redux";
import "./Buttons.css";

const Hit_Button = ({ hit }) => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);

  return (
    <button
      disabled={!userTurn || yourHandTotal >= 21}
      onClick={() => hit()}
      className="hit-button"
    >
      Hit
    </button>
  );
};

export default Hit_Button;

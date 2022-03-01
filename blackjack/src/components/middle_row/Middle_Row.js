import { useSelector } from "react-redux";
import Hit_Button from "../buttons/Hit_Button";
import Stay_Button from "../buttons/Stay_Button";
import Next_Hand_Button from "../buttons/Next_Hand_Button";
import "./Middle_Row.css";

const Middle_Row = ({ hit, yourHandTotal, startNextHand }) => {
  const gameStarted = useSelector((state) => state.game);
  return (
    <div className="middle-row">
      {gameStarted && (
        <div className="hit-stay-cont">
          <Next_Hand_Button
            yourHandTotal={yourHandTotal}
            startNextHand={startNextHand}
          />
          <Hit_Button hit={hit} yourHandTotal={yourHandTotal} />
          <Stay_Button />
        </div>
      )}
    </div>
  );
};

export default Middle_Row;

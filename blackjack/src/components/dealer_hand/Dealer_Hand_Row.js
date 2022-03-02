import { useSelector } from "react-redux";
import Game_Message from "./Game_Message";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Hand_Row = ({ startingHand }) => {
  const userTurn = useSelector((state) => state.userTurn);

  return (
    <div className="dealer-hand-row">
      <div className="card-cont-dealer-hand">
        {startingHand.length > 0 ? (
          startingHand.map((card, idx) => (
            <div
              key={idx}
              className={userTurn && idx === 0 ? "card-back" : card}
            ></div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      <Game_Message />
    </div>
  );
};

export default Dealer_Hand_Row;

import { useSelector } from "react-redux";
import Game_Message from "./Game_Message";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Hand_Row = ({ startingHand }) => {
  return (
    <div className="dealer-hand-row">
      <div className="card-cont-dealer-hand">
        {startingHand.length > 0 ? (
          startingHand.map((card) => <div key={card} className={card}></div>)
        ) : (
          <div></div>
        )}
      </div>
      <Game_Message />
    </div>
  );
};

export default Dealer_Hand_Row;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Game_Message from "./Game_Message";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Hand_Row = ({ startingHand }) => {
  const FC = useSelector((state) => state.dealerHand[0]);
  const userTurn = useSelector((state) => state.userTurn);
  let [firstCard, setFirstCard] = useState("");
  let [secondCard, setSecondCard] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstCard("");
    setSecondCard("");
  }, [FC]);

  const deal = () => {
    setTimeout(() => {
      deal1();
    }, 100);
  };

  const deal1 = () => {
    setTimeout(() => {
      setFirstCard(!userTurn ? startingHand[0] : "card-back");
      deal2();
    }, 2000);
  };

  const deal2 = () => {
    setTimeout(() => {
      setSecondCard(startingHand[1]);
    }, 2000);
  };

  return (
    <div className="dealer-hand-row">
      <div className="card-cont-dealer-hand">
        {deal()}
        <div className={firstCard}></div>
        <div className={secondCard}></div>
      </div>
      <Game_Message />
    </div>
  );
};

export default Dealer_Hand_Row;

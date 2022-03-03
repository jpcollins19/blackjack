import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handDealt } from "../../store";
import Game_Message from "./Game_Message";
import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Hand_Row = ({ startingHand }) => {
  const dispatch = useDispatch();

  const FC = useSelector((state) => state.dealerHand[0]);
  const userTurn = useSelector((state) => state.userTurn);

  let [firstCard, setFirstCard] = useState("");
  let [secondCard, setSecondCard] = useState("");
  let [dealOver, setDealOver] = useState(false);

  useEffect(() => {
    setFirstCard("");
    setSecondCard("");
    setDealOver(false);
  }, [FC]);

  const deal = () => {
    setDealOver(true);
    setTimeout(() => {
      deal1();
    }, 100);

    const deal1 = () => {
      setTimeout(() => {
        setFirstCard(!userTurn ? startingHand[0] : "card-back");
        deal2();
      }, 2000);
    };

    const deal2 = () => {
      setTimeout(() => {
        setSecondCard(startingHand[1]);
        // setDealOver(true);
        dealIsOver();
      }, 2000);
    };
  };

  const dealIsOver = () => {
    setTimeout(() => {
      dispatch(handDealt(true));
    }, 1000);
  };

  return (
    <div className="dealer-hand-row">
      <div className="card-cont-dealer-hand">
        {!dealOver && deal()}
        <div className={firstCard}></div>
        <div className={secondCard}></div>
      </div>
      <Game_Message />
    </div>
  );
};

export default Dealer_Hand_Row;

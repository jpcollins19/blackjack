import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handDealt } from "../../store";
import "./Your_Hand.css";
import "../Card_Images.css";

const Your_Hand_Row = ({ startingHand }) => {
  const dispatch = useDispatch();

  const FC = useSelector((state) => state.yourHand[0]);
  let [firstCard, setFirstCard] = useState("");
  let [secondCard, setSecondCard] = useState("");

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
      setFirstCard(startingHand[0]);
      deal2();
    }, 750);
  };

  const deal2 = () => {
    setTimeout(() => {
      setSecondCard(startingHand[1]);
      dealHandComplete();
    }, 2250);
  };

  const dealHandComplete = () => {
    setTimeout(() => {
      dispatch(handDealt(true));
    }, 1500);
  };

  return (
    <div className="your-hand-row">
      <div className="card-cont-your-hand">
        {deal()}

        <div className={firstCard}></div>
        <div className={secondCard}></div>
      </div>
    </div>
  );
};

export default Your_Hand_Row;

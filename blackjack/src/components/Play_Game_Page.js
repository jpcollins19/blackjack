import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import {
  hitDealer,
  hitUser,
  fetchUserHand,
  clearHand,
  calculateHand,
} from "../store";
import { calcHand } from "../store";
import Your_Hand from "./your_hand/Your_Hand";
import Dealer_Hand from "./dealer_hand/Dealer_Hand";
import Middle_Row from "./middle_row/Middle_Row";
import "./Play_Game.css";

const Play_Game_Page = () => {
  let [nextCard, setNextCard] = useState(1);

  const dispatch = useDispatch();

  let yourHand = useSelector((state) => state.yourHand);
  let yourHandCalc = useSelector((state) => state.yourHandCalc);
  const deck = useSelector((state) => state.deck);

  useEffect(() => {
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(fetchUserHand());
    dispatch(calculateHand(yourHand));
  }, []);

  const startNextHand = async (value) => {
    if (value) {
      setNextCard(nextCard++);
      dispatch(clearHand());
    }

    console.log("start Next Hand was called");

    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);

    // dispatch(fetchUserHand());

    // dispatch(calculateHand(yourHand));
  };

  // const newGame = () => {
  //   startNextHand(false);
  // };

  const hit = () => {
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(calculateHand(yourHand));
  };

  return (
    <Router>
      <div className="play-game-page">
        <Dealer_Hand />
        <Middle_Row hit={hit} startNextHand={startNextHand} />
        <Your_Hand />
      </div>
    </Router>
  );
};

export default Play_Game_Page;

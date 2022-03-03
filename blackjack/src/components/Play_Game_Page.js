import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import {
  hitDealer,
  hitUser,
  fetchUserHand,
  fetchDealerHand,
  clearHand,
  calculateUserHand,
  calculateDealerHand,
} from "../store";
import Your_Hand from "./your_hand/Your_Hand";
import Dealer_Hand from "./dealer_hand/Dealer_Hand";
import Middle_Row from "./middle_row/Middle_Row";
import "./Play_Game.css";

const Play_Game_Page = () => {
  let [nextCard, setNextCard] = useState(0);

  const dispatch = useDispatch();

  let yourHand = useSelector((state) => state.yourHand);
  let dealerHand = useSelector((state) => state.dealerHand);
  const deck = useSelector((state) => state.deck);
  let dealerHandTotal = useSelector((state) => state.dealerHandCalc);

  useEffect(() => {
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(hitDealer(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(fetchUserHand());
    dispatch(fetchDealerHand());
    dispatch(calculateUserHand(yourHand));
    dispatch(calculateDealerHand(dealerHand));
  }, [yourHand, dealerHand]);

  const startNextHand = () => {
    setNextCard(nextCard++);
    dispatch(clearHand());
  };

  const hit = () => {
    setNextCard(nextCard++);
    dispatch(hitUser(deck[nextCard]));
    setNextCard(nextCard++);
    dispatch(calculateUserHand(yourHand));
  };

  return (
    <Router>
      <div className="play-game-page">
        <Dealer_Hand />
        <Middle_Row
          hit={hit}
          startNextHand={startNextHand}
          nextCard={nextCard}
          deck={deck}
          dealerHand={dealerHand}
        />
        <Your_Hand />
      </div>
    </Router>
  );
};

export default Play_Game_Page;

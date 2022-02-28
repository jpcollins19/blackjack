import { useSelector } from "react-redux";
import { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./Play_Game.css";
import "./Card_Images.css";
import Start_Game_Button from "./buttons/Start_Game_Button";
import Hit_Button from "./buttons/Hit_Button";
import Stay_Button from "./buttons/Stay_Button";
import Your_Hand from "./your_hand/Your_Hand";

const Play_Game_Page = () => {
  const [yourHand, setyourHand] = useState([]);
  const [dealerHand, setdealerHand] = useState([]);
  let [yourHandTotal, setyourHandTotal] = useState(0);
  let [dealerHandTotal, setdealerHandTotal] = useState(0);
  let [nextCard, setNextCard] = useState(1);

  const deck = useSelector((state) => state.deck);
  const gameStarted = useSelector((state) => state.game);

  const calcStartingHands = () => {};

  const newGame = () => {
    yourHand.push(deck[nextCard]);
    setNextCard(nextCard++);
    dealerHand.push(deck[nextCard]);
    setNextCard(nextCard++);
    yourHand.push(deck[nextCard]);
    setNextCard(nextCard++);
    dealerHand.push(deck[nextCard]);
    setNextCard(nextCard++);

    console.log("yourHand", yourHand);
    console.log("dealerHand", dealerHand);

    calcStartingHands();
  };

  return (
    <Router>
      <div className="play-game-page">
        <div>
          <div className="dealer-hand-row">
            <div className="card-cont">
              <div className="AS"></div>
            </div>
          </div>
          <div className="dealer-cards-row">
            <div className="card-cont-marg-bottom">
              <div className="AD"></div>
              <div className="twoD"></div>
            </div>
          </div>
        </div>
        <div className="middle-row">
          {!gameStarted ? (
            <Start_Game_Button newGame={newGame} />
          ) : (
            <div className="hit-stay-cont">
              <Hit_Button />
              <Stay_Button />
            </div>
          )}
        </div>
        <Your_Hand />
      </div>
    </Router>
  );
};

export default Play_Game_Page;

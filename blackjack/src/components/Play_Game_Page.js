import { useSelector } from "react-redux";
import { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./Play_Game.css";
import "./Card_Images.css";
import Your_Hand from "./your_hand/Your_Hand";
import Hit_Button from "./buttons/Hit_Button";
// import New_Game_Button from "./buttons/Play_Game_Button";

const Play_Game_Page = () => {
  const [currentCard, setCurrentCard] = useState("");
  const [yourHand, setyourHand] = useState([]);
  const [dealerHand, setdealerHand] = useState([]);
  let [yourHandTotal, setyourHandTotal] = useState(0);
  let [dealerHandTotal, setdealerHandTotal] = useState(0);
  let [nextCard, setNextCard] = useState(1);
  let [gameStarted, setgameStarted] = useState(false);

  const deck = useSelector((state) => state.deck);

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
    setgameStarted(true);

    console.log("yourHand", yourHand);
    console.log("dealerHand", dealerHand);

    calcStartingHands();
  };

  return (
    <Router>
      <div className="play-game-page">
        <div className="dealer-hand-row">
          <div className="card-cont">
            <div className="AS"></div>
            <div className="twoS"></div>
            <div className="threeS"></div>
            <div className="fourS"></div>
            <div className="fiveS"></div>
            <div className="sixS"></div>
            <div className="sevenS"></div>
            <div className="eightS"></div>
            <div className="nineS"></div>
            <div className="tenS"></div>
            <div className="JS"></div>
            <div className="QS"></div>
            <div className="KS"></div>
          </div>
        </div>
        <div className="dealer-cards-row">
          <div className="card-cont-marg-bottom">
            <div className="AD"></div>
            <div className="twoD"></div>
            <div className="threeD"></div>
            <div className="fourD"></div>
            <div className="fiveD"></div>
            <div className="sixD"></div>
            <div className="sevenD"></div>
            <div className="eightD"></div>
            <div className="nineD"></div>
            <div className="tenD"></div>
            <div className="JD"></div>
            <div className="QD"></div>
            <div className="KD"></div>
          </div>
        </div>
        <div className="middle-row">
          {" "}
          <Hit_Button />
        </div>
        <div className="your-cards-row">
          <div className="card-cont-marg-top">
            <div className="AC"></div>
            <div className="twoC"></div>
            <div className="threeC"></div>
            <div className="fourC"></div>
            <div className="fiveC"></div>
            <div className="sixC"></div>
            <div className="sevenC"></div>
            <div className="eightC"></div>
            <div className="nineC"></div>
            <div className="tenC"></div>
            <div className="JC"></div>
            <div className="QC"></div>
            <div className="KC"></div>
          </div>
        </div>
        <div className="your-hand-row">
          <div className="card-cont">
            <div className="AH"></div>
            <div className="twoH"></div>
            <div className="threeH"></div>
            <div className="fourH"></div>
            <div className="fiveH"></div>
            <div className="sixH"></div>
            <div className="sevenH"></div>
            <div className="eightH"></div>
            <div className="nineH"></div>
            <div className="tenH"></div>
            <div className="JH"></div>
            <div className="QH"></div>
            <div className="KH"></div>
          </div>
        </div>

        <Your_Hand yourHand={yourHand} />
      </div>
    </Router>
  );
};

export default Play_Game_Page;

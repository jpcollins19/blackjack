import { useSelector } from "react-redux";
import { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Your_Hand from "./your_hand/Your_Hand";
import Hit_Button from "./buttons/Hit_Button";
import Play_Game_Button from "./buttons/Play_Game_Button";
import "./Home.css";

const Home_Page = () => {
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
      <div className="home-page">
        <Play_Game_Button />

        <Your_Hand yourHand={yourHand} />
      </div>
    </Router>
  );
};

export default Home_Page;

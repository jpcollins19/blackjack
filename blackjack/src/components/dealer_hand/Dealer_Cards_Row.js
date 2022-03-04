import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDealerHand,
  dealersTurn,
  handOver,
  nextHandReady,
} from "../../store";
import "./Dealer_Hand.css";
import "../Card_Images.css";

// let cardRowInfo = [<div key={"joe"}></div>];

const Dealer_Cards_Row = () => {
  const dispatch = useDispatch();

  const dealerTurn = useSelector((state) => state.dealerTurn);
  const dealerHand = useSelector((state) => state.dealerHand);
  const handIsOver = useSelector((state) => state.handIsOver);
  const nextHandHasStarted = useSelector((state) => state.nextHandHasStarted);

  const hitCards = dealerHand.slice(2);

  let [cardRowInfo, setCardRowInfo] = useState([<div key={"joe"}></div>]);
  let [numOfHits, setNumOfHits] = useState(0);

  useEffect(() => {
    dispatch(fetchDealerHand());
    !dealerTurn && setCardRowInfo([<div key={"joe"}></div>]);
  }, [dealerTurn]);

  const relayCards = () => {
    console.log("relay cards was called");

    // const card3 = () => {
    //   setTimeout(() => {
    //     console.log("card3 timeout called");

    //     setCardRowInfo((oldArray) => [
    //       ...oldArray,
    //       <div key={numOfHits + 13} className={hitCards[numOfHits]}></div>,
    //     ]);
    //     setNumOfHits(numOfHits++);

    //     numOfHits !== hitCards.length && card4();
    //     numOfHits === hitCards.length && dispatch(nextHandReady(true));
    //     numOfHits === hitCards.length && setNumOfHits(0);
    //   }, 2000);
    // };

    // const card2 = () => {
    //   setTimeout(() => {
    //     console.log("card2 timeout called");

    //     // setCardRowInfo((oldArray) => [
    //     //   ...oldArray,
    //     //   <div key={numOfHits + 13} className={hitCards[numOfHits]}></div>,
    //     // ]);

    //     // cardRowInfo = [
    //     //   ...cardRowInfo,
    //     //   <div key={numOfHits + 13} className={hitCards[numOfHits]}></div>,
    //     // ];

    //     setNumOfHits(numOfHits++);

    //     numOfHits !== hitCards.length && card2();
    //     numOfHits === hitCards.length && dispatch(nextHandReady(true));
    //     numOfHits === hitCards.length && setNumOfHits(0);
    //   }, 2000);
    // };

    const card1 = () => {
      setTimeout(() => {
        console.log("card1 timeout called");

        cardRowInfo.pop();

        // cardRowInfo = [
        //   ...cardRowInfo,
        //   <div key={numOfHits + 13} className={hitCards[numOfHits]}></div>,
        // ];

        setCardRowInfo((oldArray) => [
          ...oldArray,
          <div key={numOfHits + 13} className={hitCards[numOfHits]}></div>,
        ]);

        setNumOfHits(numOfHits++);

        numOfHits !== hitCards.length &&
          setTimeout(() => {
            card1();
          }, 1000);

        numOfHits === hitCards.length && dispatch(nextHandReady(true));
        numOfHits === hitCards.length && setNumOfHits(0);
      }, 500);
    };

    card1();
  };

  // nextHandHasStarted && setCardRowInfo([<div key={"joe"}></div>]);

  if (dealerTurn && !handIsOver) {
    setTimeout(() => {
      console.log("first timeout called");
      dispatch(handOver(true));
      relayCards();
    }, 2500);
  }

  return (
    <div className="dealer-cards-row">
      <div className="card-cont-marg-bottom">
        {/* {!dealerTurn ? <div></div> : relayCards()} */}
        {/* {cardRowInfo.map((card) => {
          return card;
        })} */}
        {cardRowInfo}
      </div>
    </div>
  );
};

export default Dealer_Cards_Row;

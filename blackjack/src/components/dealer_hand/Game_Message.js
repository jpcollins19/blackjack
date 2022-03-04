import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setGameMessage,
  gameMessageRelayed,
  nextHandReady,
  dealersTurn,
  dealerIsUpThunk,
} from "../../store";
import "./Dealer_Hand.css";

const Game_Message = ({ nextCard }) => {
  const dispatch = useDispatch();

  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const handIsOver = useSelector((state) => state.handIsOver);
  const handHasBeenDealt = useSelector((state) => state.handHasBeenDealt);
  const handStarted = useSelector((state) => state.handStarted);
  const gameMessage = useSelector((state) => state.gameMessage);
  const gameMessageWasRelayed = useSelector(
    (state) => state.gameMessageWasRelayed
  );
  const deck = useSelector((state) => state.deck);
  const dealerTurn = useSelector((state) => state.dealerTurn);
  const dealerHand = useSelector((state) => state.dealerHand);

  const relayMessages = () => {
    const relay1stMessage = () => {
      dispatch(gameMessageRelayed(true));
      setTimeout(() => {
        if (yourHandTotal > 21) {
          dispatch(setGameMessage("Bust!"));
          dispatch(nextHandReady(true));
        } else if (yourHandTotal === 21) {
          dispatch(setGameMessage("You got 21!"));

          setTimeout(() => {
            dispatch(setGameMessage(""));
          }, 2000);

          setTimeout(() => {
            dispatch(dealerIsUpThunk(nextCard + 1, deck, dealerHand));
            dispatch(setGameMessage("Dealer is up!"));
            dispatch(dealersTurn(true));
          }, 2100);

          setTimeout(() => {
            dispatch(setGameMessage(""));
          }, 4000);
        }
      }, 500);
    };

    relay1stMessage();
  };

  const clearGameMessage = () => {
    setTimeout(() => {
      dispatch(gameMessageRelayed(true));
      dispatch(setGameMessage(""));
    }, 2000);
  };

  handHasBeenDealt &&
    yourHandTotal >= 21 &&
    !gameMessageWasRelayed &&
    relayMessages();

  dealerTurn && !gameMessageWasRelayed && clearGameMessage();

  return <div className="message-cont">{gameMessage}</div>;
};

export default Game_Message;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handOver,
  nextHandStarted,
  setGameMessage,
  usersTurn,
  handDealt,
  gameMessageRelayed,
  nextHandReady,
} from "../../store";
import "./Dealer_Hand.css";

const Game_Message = () => {
  const dispatch = useDispatch();

  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);
  const handHasBeenDealt = useSelector((state) => state.handHasBeenDealt);
  const handStarted = useSelector((state) => state.handStarted);
  const gameMessage = useSelector((state) => state.gameMessage);
  const gameMessageWasRelayed = useSelector(
    (state) => state.gameMessageWasRelayed
  );

  const dealerTurn = useSelector((state) => state.dealerTurn);

  // useEffect(() => {}, [gameMessageWasRelayed]);

  // let [gameMessageRelayed, setGameMessageRelayed] = useState(false);

  const relayMessages = () => {
    console.log("relay Messages was called");
    const clearMessage = () => {
      setTimeout(() => {
        dispatch(setGameMessage(""));
      }, 1000);
    };

    // const handStartedClear = () => {
    //   setTimeout(() => {
    //     dispatch(nextHandStarted());
    //     setGameMessage("");
    //   }, 1000);
    // };

    // handStarted && handStartedClear();

    // const relay2ndMessage = () => {
    //   setTimeout(() => {
    //     if (yourHandTotal > 21) {
    //       dispatch(handOver(true));
    //       dispatch(handDealt(false));
    //       dispatch(setGameMessage("Play Again?"));
    //     } else if (yourHandTotal === 21) {
    //       dispatch(setGameMessage("Dealer is up!"));
    //       dispatch(usersTurn(false));
    //       clearMessage();
    //     }

    //     // else if (!userTurn) {
    //     //   setGameMessage("Dealer is up!");
    //     // }
    //   }, 1500);
    // };

    const relay1stMessage = () => {
      dispatch(gameMessageRelayed(true));
      setTimeout(() => {
        if (yourHandTotal > 21) {
          dispatch(setGameMessage("Bust!"));
          dispatch(nextHandReady(true));
        } else if (yourHandTotal === 21) {
          dispatch(setGameMessage("You got 21!"));
        }

        // else if (dealerTurn) {
        //   dispatch(setGameMessage("Dealer is up!"));
        // }
        // relay2ndMessage();
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

  // handHasBeenDealt && dealerTurn && !gameMessageWasRelayed && relayMessages();

  // handStarted && relayMessages();

  return <div className="message-cont">{gameMessage}</div>;
};

export default Game_Message;

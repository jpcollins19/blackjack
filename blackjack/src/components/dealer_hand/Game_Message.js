import { useState } from "react";
import { useSelector } from "react-redux";
import "./Dealer_Hand.css";

const Game_Message = () => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);
  const dealComplete = useSelector((state) => state.dealComplete);

  let [dealOverMessageRelayed, setdealOverMessageRelayed] = useState(false);
  let [dealOverMessage, setDealOverMessage] = useState("");
  let [firstMessage, setFirstMessage] = useState("");
  let [secondMessage, setSecondMessage] = useState("");

  const relayMessages = () => {
    if (!dealOverMessageRelayed) {
      setDealOverMessage("Hit or Stay?");
      setdealOverMessageRelayed(true);
    }

    const clear = () => {
      setTimeout(() => {
        setDealOverMessage("");
      }, 2000);
    };

    clear();

    const relay1stMessage = () => {
      setTimeout(() => {
        if (yourHandTotal > 21) {
          setFirstMessage("Bust!");
        } else if (yourHandTotal === 21) {
          setFirstMessage("You got 21!");
        } else if (!userTurn) {
          setFirstMessage("Dealer is up!");
        }
        // relay2ndMessage();
      }, 500);
    };

    relay1stMessage();

    // const relay2ndMessage = () => {
    //   console.log("2ndmessag was called");
    //   // setTimeout(() => {
    //   //   if (yourHandTotal > 21) {
    //   //     setFirstMessage("Bust!");
    //   //   } else if (yourHandTotal === 21) {
    //   //     setFirstMessage("You got 21!");
    //   //   } else if (!userTurn) {
    //   //     setFirstMessage("Dealer is up!");
    //   //   }
    //   //   relay2ndMessage();
    //   // }, 500);

    //   // setTimeout(() => {
    //   //   if (yourHandTotal > 21) {
    //   //     setSecondMessage("Play again?");
    //   //   } else if (yourHandTotal === 21) {
    //   //     setSecondMessage("Dealer is up!");
    //   //   } else if (!userTurn) {
    //   //     // firstMessage = "Dealer is up!";
    //   //   }
    //   // }, 1000);
    // };
  };

  dealComplete && !dealOverMessageRelayed && relayMessages();

  yourHandTotal > 21 && relayMessages();

  return (
    <div className="message-cont">
      {dealOverMessage}
      {firstMessage}
      {secondMessage}
    </div>
  );
};

export default Game_Message;

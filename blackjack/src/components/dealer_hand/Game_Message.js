import { useState } from "react";
import { useSelector } from "react-redux";
import "./Dealer_Hand.css";

const Game_Message = () => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  const userTurn = useSelector((state) => state.userTurn);

  let [firstMessage, setFirstMessage] = useState("");
  let [secondMessage, setSecondMessage] = useState("");

  const relayMessages = () => {
    console.log("relay was called");
    const relay1stMessage = () => {
      console.log("relay1st message was called");
      setTimeout(() => {
        if (yourHandTotal > 21) {
          setFirstMessage("Bust!");
        } else if (yourHandTotal === 21) {
          setFirstMessage("You got 21!");
        } else if (!userTurn) {
          setFirstMessage("Dealer is up!");
        }
      }, 1000);

      relay2ndMessage();
    };

    const relay2ndMessage = () => {
      setTimeout(() => {
        if (yourHandTotal > 21) {
          setSecondMessage("Play again?");
        } else if (yourHandTotal === 21) {
          setSecondMessage("Dealer is up!");
        } else if (!userTurn) {
          // firstMessage = "Dealer is up!";
        }
      }, 1000);
    };

    relay1stMessage();
  };

  !userTurn && relayMessages();

  return (
    <div className="message-cont">
      {firstMessage}
      {secondMessage}
    </div>
  );
};

export default Game_Message;

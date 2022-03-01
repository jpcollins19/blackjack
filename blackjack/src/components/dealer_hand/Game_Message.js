import { useSelector } from "react-redux";
import "./Dealer_Hand.css";

const Game_Message = () => {
  const yourHandTotal = useSelector((state) => state.yourHandCalc);
  // console.log("your-hand-total-from-store-info", yourHandTotal);

  let message;

  if (yourHandTotal > 21) {
    message = "Bust!";
  } else if (yourHandTotal === 21) {
    message = "You got 21!";
  }

  return <div className="message-cont">{message}</div>;
};

export default Game_Message;

import "./Buttons.css";
import { useDispatch } from "react-redux";
import { startGame } from "../../store";

const Start_Game_Button = ({ newGame }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(startGame(true));
        newGame();
      }}
      className="start-game-button"
    >
      Start Game
    </button>
  );
};

export default Start_Game_Button;

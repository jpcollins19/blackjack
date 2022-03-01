import { useDispatch } from "react-redux";
import { startGame } from "../../store";
import { Link } from "react-router-dom";
import "./Buttons.css";

const Start_Game_Button = () => {
  const dispatch = useDispatch();

  return (
    <Link to="/play" style={{ textDecoration: "none" }}>
      <button
        onClick={() => {
          dispatch(startGame(true));
        }}
        className="start-game-button"
      >
        Start Game
      </button>
    </Link>
  );
};

export default Start_Game_Button;

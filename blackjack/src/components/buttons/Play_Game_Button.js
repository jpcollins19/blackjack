import { Link } from "react-router-dom";
import "./Buttons.css";

const Play_Game_Button = ({ newGame, gameStarted }) => {
  return (
    <Link to="/play">
      <button
        disabled={gameStarted}
        className="play-game-button"
        onClick={newGame}
      >
        Play Game
      </button>
    </Link>
  );
};

export default Play_Game_Button;

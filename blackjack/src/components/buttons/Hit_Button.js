import "./Buttons.css";

const Hit_Button = ({ hit, yourHandTotal }) => {
  return (
    <button
      disabled={yourHandTotal >= 21}
      onClick={() => hit()}
      className="hit-button"
    >
      Hit
    </button>
  );
};

export default Hit_Button;

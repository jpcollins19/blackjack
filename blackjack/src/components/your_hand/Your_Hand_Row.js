import "./Your_Hand.css";
import "../Card_Images.css";

const Your_Hand_Row = ({ startingHand }) => {
  return (
    <div className="your-hand-row">
      <div className="card-cont-your-hand">
        {startingHand.length > 0 ? (
          startingHand.map((card) => <div key={card} className={card}></div>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Your_Hand_Row;

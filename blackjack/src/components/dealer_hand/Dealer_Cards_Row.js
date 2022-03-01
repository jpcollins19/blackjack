import "./Dealer_Hand.css";
import "../Card_Images.css";

const Dealer_Cards_Row = ({ hitCards }) => {
  return (
    <div className="dealer-cards-row">
      <div className="card-cont-marg-bottom">
        {hitCards.length > 0 ? (
          hitCards.map((card) => <div key={card} className={card}></div>)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Dealer_Cards_Row;

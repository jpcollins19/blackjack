import "./Your_Hand.css";

const Your_Hand = () => {
  return (
    <div>
      <div className="your-cards-row">
        <div className="card-cont-marg-top">
          <div className="AC"></div>
          <div className="AH"></div>
        </div>
      </div>
      <div className="your-hand-row">
        <div className="card-cont-your-hand">
          <div className="AH"></div>
        </div>
      </div>
    </div>
  );
};

export default Your_Hand;

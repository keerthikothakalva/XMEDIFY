import "../Offers/Offers.css";

import group10 from "../../../assets/Group 10.jpg";
import group11 from "../../../assets/Group 11.jpg";
import group12 from "../../../assets/Group 12.jpg";

function Offers() {
  return (
    <section className="offers">
      <div className="offers-container">

        <div className="offer-card">
          <img src={group10} alt="offer1" />
        </div>

        <div className="offer-card">
          <img src={group11} alt="offer2" />
        </div>

        <div className="offer-card">
          <img src={group12} alt="offer3" />
        </div>

      </div>

      <div className="pagination-dots">
  <span></span>
  <span className="active"></span>
  <span></span>
</div>
    </section>
  );
}
export default Offers;


import SmsForm from "./SmsForm";
import mobile from "../../../assets/mobile.jpg";
import arrow from "../../../assets/down-arr.jpg";
import playstore from "../../../assets/playstore.jpg";
import apple from "../../../assets/apple-logo.jpg";
import "./DownloadApp.css";

function DownloadApp() {
  return (
    <section className="download-section">
      <div className="download-container">

        
        <div className="download-left">
          <img src={mobile} alt="mobile app" />
        </div>

        
        <div className="download-right">

          <h2>
            Download the <br />
            <span>Medify App</span>
          </h2>

          <div className="arrow-text">
            <img src={arrow} alt="arrow" />
            <p>Get the link to download the app</p>
          </div>

          <SmsForm />

          <div className="store-buttons">
            <button className="store-btn">
              <img src={playstore} alt="playstore" />
              Google Play
            </button>

            <button className="store-btn">
              <img src={apple} alt="apple" />
              App Store
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DownloadApp;
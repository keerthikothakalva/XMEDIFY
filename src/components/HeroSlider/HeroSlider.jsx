import "./HeroSlider.css";
import doctor from "../../assets/hero.jpg";


function HeroSlider() {
  return (
    <section className="hero">

      <div className="hero-container">

        
        <div className="hero-text">

          <p className="hero-subtitle">
            Skip the travel! Find Online
          </p>

          <h1 className="hero-title">
            Medical <span>Centers</span>
          </h1>

          <p className="hero-desc">
            Connect instantly with a 24x7 specialist or choose to
            video visit a particular doctor.
          </p>

          <button className="hero-btn">
            Find Centers
          </button>

        </div>

        
        <div className="hero-image">
          <img src={doctor} alt="Doctors" />
        </div>

      </div>

    </section>
  );
}

export default HeroSlider;
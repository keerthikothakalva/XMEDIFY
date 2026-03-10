import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <>
      <div className={styles.topBar}>
        The health and well-being of our patients and their health care team
        will always be our priority.
      </div>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Medify" />
        </div>

        <ul className={styles.menu}>
          <li><Link to="/">Find Doctors</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
          <li><Link to="/surgeries">Surgeries</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
        </ul>

        <Link to="/my-bookings">
  <button className={styles.bookBtn}>My Bookings</button>
</Link>
      </nav>
    </>
  );
}

export default Navbar;
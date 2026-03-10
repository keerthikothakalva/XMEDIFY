function FooterLink({ links }) {
  return (
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index}>
          <span className="arrow">›</span> {link}
        </li>
      ))}
    </ul>
  );
}

export default FooterLink;
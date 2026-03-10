function IconCard({ icon, title, description }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {typeof icon === "string" && icon.startsWith("http") ? (
        <img src={icon} alt={title} width="50" />
      ) : typeof icon === "string" && icon.includes(".jpg") ? (
        <img src={icon} alt={title} width="50" />
      ) : (
        <div style={{ fontSize: "40px" }}>{icon}</div>
      )}

      <h3 style={{ marginTop: "15px" }}>{title}</h3>

      <p style={{ color: "#555" }}>{description}</p>
    </div>
  );
}

export default IconCard;
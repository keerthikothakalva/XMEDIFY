import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", marginBottom: "10px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px",
          cursor: "pointer",
          background: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      {open && (
        <div style={{ padding: "10px" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
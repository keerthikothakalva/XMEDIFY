import { useEffect } from "react";

function AutohideSnackbar({ message, show, setShow }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#4caf50",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      {message}
    </div>
  );
}

export default AutohideSnackbar;
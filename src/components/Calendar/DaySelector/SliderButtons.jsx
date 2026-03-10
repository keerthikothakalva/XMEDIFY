import prev from "../../../assets/prev.jpg";
import next from "../../../assets/next.jpg";

function SliderButtons({ onPrev, onNext }) {
return (
<div
style={{
display: "flex",
justifyContent: "center",
gap: "10px",
marginBottom: "10px",
}}
>
<button
onClick={onPrev}
style={{ border: "none", background: "transparent", cursor: "pointer" }}
> <img src={prev} alt="previous" width="40" /> </button>

  <button
    onClick={onNext}
    style={{ border: "none", background: "transparent", cursor: "pointer" }}
  >
    <img src={next} alt="next" width="40" />
  </button>
</div>

);
}

export default SliderButtons;

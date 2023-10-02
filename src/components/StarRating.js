import { useState } from "react";
import Star from "./Star";
const containerSyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating() {
  const [rating, setRating] = useState("0");
  const [tempRating, setTempRating] = useState("0");
  function handleOnclick(rating) {
    setRating(rating);
  }
  return (
    <div style={containerSyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => handleOnclick(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

import "./styles/ShinyText.css";

const ShinyText = ({
  text,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  speed = 2,
  delay = 0,
  disabled = false,
  pauseOnHover = false,
  direction = "left"
}) => {
  const duration = Math.max(0.1, speed);
  const wait = Math.max(0, delay);
  const dir = direction === "left" ? "normal" : "reverse";

  const style = disabled
    ? { color }
    : {
        "--shine-color": shineColor,
        "--base-color": color,
        "--shine-duration": `${duration}s`,
        "--shine-delay": `${wait}s`,
        "--shine-direction": dir
      };

  const hoverClass = pauseOnHover ? "shiny-text--pause" : "";

  return (
    <span className={`shiny-text ${hoverClass} ${className}`} style={style}>
      {text}
    </span>
  );
};

export default ShinyText;

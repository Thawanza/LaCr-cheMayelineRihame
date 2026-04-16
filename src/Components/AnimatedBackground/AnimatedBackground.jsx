import React from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
  const balls = Array.from({ length: 40 });

  return (
    <div className="animated-bg">
      {balls.map((_, i) => (
        <div
          key={i}
          className="ball"
          style={{
            width: `${Math.random() * 15 + 5}px`,
            height: `${Math.random() * 15 + 5}px`,
            backgroundColor: getRandomColor(),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function getRandomColor() {
  const colors = [
    "#ff6ec7",
    "#7efff5",
    "#ffb8b8",
    "#c77dff",
    "#7b2cbf",
    "#a5f3fc",
    "#f9a8d4",
    "#fcd34d",
    "#93c5fd",
    "#bbf7d0",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default AnimatedBackground;
import React from "react";

const Grid = ({ isStart }) => {
  return Array(25)
    .fill(0)
    .map((_, idx) => (
      <div
        onMouseEnter={(e) => {
          if (!isStart) return;

          const ulElement = document.getElementById("list");
          const li = document.createElement("li");
          li.innerHTML = `row ${Math.floor(idx / 5) + 1} col ${(idx % 5) + 1}`;
          li.className = "list-item";
          li.id = idx;

          if (e.target.style.background !== "rgb(49, 140, 231)") {
            e.target.style.background = "rgb(49, 140, 231)";
            ulElement.appendChild(li);
          } else {
            e.target.style.background = "#fff";
            document.getElementById(idx).remove();
          }
        }}
        style={{ outline: "1px solid" }}
        key={idx}
      ></div>
    ));
};

export default Grid;

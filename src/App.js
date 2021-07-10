import React, { useState } from "react";
import Box from "./Box";
import "./styles.css";

const App = () => {
  const [dragId, setDragId] = useState();
  const [boxes, setBoxes] = useState([
    {
      id: "Some fungi create zombies, then control their minds",
      color: "red",
      order: 1
    },
    {
      id: "Armadillo shells are bulletproof",
      color: "green",
      order: 2
    },
    {
      id: "Firefighters use wetting agents to make water wetter",
      color: "blue",
      order: 3
    },
    {
      id: "Octopuses lay 56,000 eggs at a time",
      color: "yellow",
      order: 4
    },
    {
      id:
        "Kleenex tissues were originally intended for gas masks",
      color: "cyan",
      order: 5
    },
    {
      id: "That tiny pocket in jeans was designed to store pocket watches",
      color: "orange",
      order: 6
    }
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <div className="App">
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => (
          <Box
            key={box.id}
            boxColor={box.color}
            boxNumber={box.id}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
};

export default App;

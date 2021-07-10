import React from "react";

const Box = ({ boxColor, boxNumber, handleDrag, handleDrop }) => {
  return (
    <div
      draggable={true}
      id={boxNumber}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      style={{
        backgroundColor: boxColor,
        border: "1px solid",
        borderColor: boxColor,
        color: "#FFF",
        width: "100%",
        height: "100%"
      }}
    >
      {boxNumber}
    </div>
  );
};

export default Box;

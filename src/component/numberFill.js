import React from "react";

export default function numberFill({ number }) {
  return (
    <div
      style={{
        fontSize: 18,
        background: "white",
        color: "black",
        borderRadius: 300,
        width: 40,
        height: 40,
        margin: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number}
    </div>
  );
}

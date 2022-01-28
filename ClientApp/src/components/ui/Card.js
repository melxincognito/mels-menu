import React from "react";

export default function Card(props) {
  // make a var with a card style here to prevent making a seperate css file for this component
  var cardStyle = {
    height: "275px",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.BackgroundImage})`,
    color: "white",
  };

  return <div style={cardStyle}> {props.children} </div>;
}

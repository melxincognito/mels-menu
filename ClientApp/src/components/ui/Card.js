import React from "react";

export default function Card(props) {
  // make a var with a card style here to prevent making a seperate css file for this component
  var cardStyle = {
    height: props.height,
    borderRadius: "6px",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.493)",
    margin: "10px",
    display: props.display,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.BackgroundImage})`,
    color: "white",
    backgroundColor: props.BackgroundColor,
  };

  return <div style={cardStyle}> {props.children} </div>;
}

Card.defaultProps = {
  height: 275,
  BackgroundColor: "PaleVioletRed",
  display: "flex",
};

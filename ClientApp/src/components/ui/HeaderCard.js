import React from "react";

export default function HeaderCard(props) {
  // make the styles in its own variable here so you don't have to have a seperate css file . less mess
  var headerCardStyle = {
    backgroundColor: "white",
    borderRadius: "6px",
    height: "60px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={headerCardStyle}> {props.children} </div>;
}

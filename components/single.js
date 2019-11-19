import React from "react";

export default function single(props) {
  return (
    <div>
      <h1 style={{ color: "#fff" }}>{props && props.title}</h1>
      <img>{props && props.image}</img>
      <p style={{ color: "#fff" }}>{props && props.content}</p>
    </div>
  );
}

import React from "react";

export default function single(props) {
  return (
    <div>
      <h1>{props && props.title}</h1>
      <img>{props && props.image}</img>
      <p>{props && props.content}</p>
    </div>
  );
}

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

function Note(props) {
  return (
    <div className="note">
      <h1>
        {props.title}
        <p>{props.content}</p>
      </h1>
    </div>
  );
}

export default Note;

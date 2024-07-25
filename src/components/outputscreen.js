import React from "react";

const OutputScreen = (props) => {
  return (
    <div className="screen">
      <div className="question">{props.question}</div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};

export default OutputScreen;

import React from "react";

export const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do?
      </button>
    </div>
  );
};

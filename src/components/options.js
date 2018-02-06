import React from "react";
import { Option } from "./option";

export const Options = props => {
  const optionValues = props.options || [];
  return (
    <div>
      <div className="widget-header">
        <p>Your options</p>
        <button
          className="button button--link"
          disabled={optionValues.length <= 0}
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {optionValues.length != 0 && (
        <ol>
          {optionValues.map((e, i) => (
            <Option
              index={i+1}
              value={e}
              key={e}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))}
        </ol>
      )}
      {optionValues.length == 0 && (
        <p className="widget-message">Please add few options to get started!</p>
      )}
    </div>
  );
};

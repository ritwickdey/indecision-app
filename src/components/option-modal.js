import React from "react";
import Modal from "react-modal";

export const OptionModel = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Option-Model"
    onRequestClose={props.handleClear}
  >
    <h1>Selected Option</h1>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClear}>Okay</button>
  </Modal>
);

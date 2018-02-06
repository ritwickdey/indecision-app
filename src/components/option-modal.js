import React from "react";
import Modal from "react-modal";

export const OptionModel = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Option-Model"
    closeTimeoutMS={200}
    onRequestClose={props.handleClear}
    className="modal"
  >
    <h1 className="modal__title">Selected Option: </h1>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClear}>
      Okay
    </button>
  </Modal>
);

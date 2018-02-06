import React from "react";

import { AddOption } from "./add-options";
import { Header } from "./header";
import { Action } from "./action";
import { Options } from "./options";
import { OptionModel } from "./option-modal";

const STORAGE_KEY = "options-items";

export class IndecisionApp extends React.Component {
  static get defaultProps() {
    return { options: [] };
  }

  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  componentDidMount() {
    this.setState(() => ({
      options: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    }));
  }

  componentDidUpdate(oldProp, oldState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.options));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = option => {
    this.setState(oldState => {
      const optionIndex = oldState.options.indexOf(option);
      if (optionIndex < 0) return;
      const newOptions = [...oldState.options];
      newOptions.splice(optionIndex, 1);
      return {
        options: newOptions
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
    // alert(this.state.options[randomNum]);
  };

  handleClear = () => this.setState(() => ({ selectedOption: undefined }));

  handleAddOption = option => {
    if (!option) return "Invalid option value";
    if (this.state.options.indexOf(option) > -1)
      return `This option "${option}" already exists`;

    this.setState(oldState => ({ options: oldState.options.concat(option) }));
  };

  render() {
    const app = {
      title: "Indecision",
      subTitle: "Your Computer's Choice"
    };
    return (
      <div>
        <Header title={app.title} subTitle={app.subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModel
          selectedOption={this.state.selectedOption}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

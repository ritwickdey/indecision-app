class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["one", "two", "three"]
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    this.setState(oldState => {
      return {
        options: oldState.options.concat(option)
      };
    });
  }

  render() {
    const app = {
      title: "Indecision App",
      subTitle: "Your Computer's Choice"
    };
    return (
      <div>
        <Header title={app.title} subTitle={app.subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What Should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const optionValues = this.props.options || [];
    return (
      <div>
        {optionValues.length == 0 && <p>No options</p>}
        {optionValues.length != 0 && (
          <div>
            <p>Here are your options</p>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            <ol>{optionValues.map((e, i) => <Option value={e} key={i} />)}</ol>
          </div>
        )}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { value } = this.props;
    return <li> {value} </li>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.options.value
      ? e.target.options.value.trim()
      : null;

    if (option) {
      this.props.handleAddOption(option);
      e.target.options.value = "";
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

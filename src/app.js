class IndecisionApp extends React.Component {
  static get defaultProps() {
    return { options: [] };
  }

  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    if (!option) return "Invalid option value";
    if (this.state.options.indexOf(option) > -1)
      return `This option "${option}" already exists`;

    this.setState(oldState => ({ options: oldState.options.concat(option) }));
  }

  render() {
    const app = {
      title: "Indecision",
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

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do?
      </button>
    </div>
  );
};

const Options = props => {
  const optionValues = props.options || [];
  return (
    <div>
      {optionValues.length == 0 && <p>No options</p>}
      {optionValues.length != 0 && (
        <div>
          <p>Here are your options</p>
          <button onClick={props.handleDeleteOptions}>Remove All</button>
          <ol>{optionValues.map((e, i) => <Option value={e} key={i} />)}</ol>
        </div>
      )}
    </div>
  );
};

const Option = props => {
  const { value } = props;
  return <li> {value} </li>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.options.value
      ? e.target.options.value.trim()
      : null;

    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) e.target.options.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input autoComplete="off" type="text" name="options" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

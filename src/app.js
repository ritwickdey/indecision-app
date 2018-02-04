class IndecisionApp extends React.Component {
  render() {
    const app = {
      title: "Indecision App",
      subTitle: "Your Computer's Choice",
      options: ["one", "two", "three"]
    };
    return (
      <div>
        <Header title={app.title} subTitle={app.subTitle} />
        <Action />
        <Options options={app.options} />
        <AddOption />
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
        <button>What Should I do?</button>
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
            <ol>{optionValues.map((e, i) => <Option value={e} key={i} />)}</ol>
          </div>
        )}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    const { key, value } = this.props;
    return <li key={key}> {value} </li>;
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

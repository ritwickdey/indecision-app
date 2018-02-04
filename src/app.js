class IndecisionApp extends React.Component {
  render() {
    const app = {
      title: "Indecision App",
      subTitle: "Your Computer's Choice"
    };
    return (
      <div>
        <Header title={app.title} subTitle={app.subTitle} />
        <Action />
        <Options />
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
    return (
      <ol>
        <li>Hello</li>
        <li>Hi</li>
        <li>Hey</li>
      </ol>
    );
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

const app = {
  title: "Indecision App",
  subTitle: "Your Computer's Choice",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.options.value;
  if (option && option.trim()) {
    app.options.push(option.trim());
    e.target.elements.options.value = "";
    renderView();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderView();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  console.log(app.options[randomNum]);
  alert(app.options[randomNum]);
};

const appRoot = document.getElementById("app");

const renderView = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.options.length <= 0 && <p>No Options</p>}
      {app.options.length > 0 && (
        <div>
          <p>Here are your options</p>
          <button onClick={onMakeDecision}>What should I do?</button>
          <button type="button" onClick={onRemoveAll}>
            Remove All
          </button>
        </div>
      )}
      <ol>{app.options.map((e, i) => <li key={i}>{e}</li>)}</ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderView();

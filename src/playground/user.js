const user = {
  name: "Ritwick",
  age: 21,
  location: "India"
};

const getLocation = location => {
  if (location) return <p>location: {location}</p>;
};

const templateTwo = (
  <div>
    <h1>{user.name || "User"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);

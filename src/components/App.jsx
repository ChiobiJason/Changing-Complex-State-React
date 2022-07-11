import React, {useState} from "react";

function App() {
  const [initialFirstName, setFirstName] = useState("");
  const [initialLastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {initialFirstName} {initialLastName}</h1>
      <form>
        <input onChange={handleFirstNameChange} name="fName" placeholder="First Name" />
        <input onChange={handleLastNameChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

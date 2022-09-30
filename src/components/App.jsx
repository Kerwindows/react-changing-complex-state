import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      } else if (name === "email") {
        return { fName: prevValue.fName, lName: prevValue.lName, email: value };
      }
    });
  };
  const dontDoAnyThing = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={dontDoAnyThing}>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

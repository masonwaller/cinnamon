import React from "react";
import Signup from "./Signup.js";
import "../App.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [pw, setPW] = React.useState("");
  const [num, setNum] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || pw === "") {
      alert("Please fill out all fields.");
    } else {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: pw })
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  };
  return num ? (
    <div className="login">
      <form onSubmit={e => handleSubmit(e)} className="form">
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={pw}
            onChange={e => setPW(e.target.value)}
            className="input"
          />
        </label>
        <input type="submit" value="Submit" className="input" />
      </form>
      <button onClick={() => setNum(false)}>Create an Account</button>
    </div>
  ) : (
    <Signup setNum={setNum} />
  );
}

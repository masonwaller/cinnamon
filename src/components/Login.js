import React from "react";
import Signup from "./Signup.js";
import "../App.css";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [pw, setPW] = React.useState("");
  const [num, setNum] = React.useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (props.user !== "") {
      alert("Please logout first.");
    } else if (email === "" || pw === "") {
      alert("Please fill out all fields.");
    } else {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: pw })
      })
        .then(res => res.json())
        .then(res => props.setUser(res));
    }
  };
  return num ? (
    <div className="header">
      {props.user !== "" ? (
        <h1 className="head">Welcome back, {props.user.name}!</h1>
      ) : null}
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
    </div>
  ) : (
    <Signup setNum={setNum} setUser={props.setUser} user={props.user} />
  );
}

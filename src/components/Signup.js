import React from "react";

export default function Signup(props) {
  const [email, setEmail] = React.useState("");
  const [pw, setPW] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || pw === "" || email === "") {
      alert("Please fill out all fields.");
    } else {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: pw })
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input type="text" value={pw} onChange={e => setPW(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => props.setNum(true)}>Have an Account</button>
    </div>
  );
}

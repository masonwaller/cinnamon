import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [pw, setPW] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
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
    </div>
  );
}

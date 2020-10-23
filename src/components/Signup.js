import React from "react";

export default function Signup(props) {
  return (
    <div>
      <button onClick={() => props.setNum(true)}>Have an Account</button>
    </div>
  );
}

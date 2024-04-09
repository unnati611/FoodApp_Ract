import React, { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>Name:Unnati Shah</h2>
      <h3>Location: Bangalore</h3>
      <h3>Contact:{props.Contact} </h3>
    </div>
  );
};

export default User;

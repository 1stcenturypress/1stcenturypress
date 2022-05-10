import React from "react";

const PageNotFound = () => {
  const pageNotFound = "../Caution Tape-big.png";
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h2 className="ui header">
        <img src={pageNotFound} alt="" />
        Page Not Found
      </h2>
      <h3>
        <p>Butch and Sundance. Braniff. CNN+.</p>
        <p>Poor choices are made. Things go wrong.</p>
        <p>But don't give up hope. Try again...</p>
      </h3>
    </div>
  );
};

export default PageNotFound;

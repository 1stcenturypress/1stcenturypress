import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/alex" className="ui header">
          <i className="bullhorn icon"></i>Alex
        </Link>
        <p>
          These links don't work correctly. DO NOT CLICK THEM Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ratione quidem odit labore
          error voluptas harum quae maxime sequi blanditiis quia aliquam
          veritatis, consequatur, sed rerum facilis cum corporis aspernatur.
          Cum.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/willma" className="ui header">
          <i className="bullhorn icon"></i>Willma
        </Link>
        <p>
          These links don't work correctly. DO NOT CLICK THEM Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ratione quidem odit labore
          error voluptas harum quae maxime sequi blanditiis quia aliquam
          veritatis, consequatur, sed rerum facilis cum corporis aspernatur.
          Cum.
        </p>
      </div>
    </div>
  );
};

export default Contact;

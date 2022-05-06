import React from "react";
import { useParams } from "react-router-dom";

function Card() {
  const { user } = { useParams };

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">
        <i className="id card icon"></i>
        {user}
      </h3>
    </div>
  );
}

/*
class Card extends React.Component {
  state = { user: "" };

  componentDidMount() {
    let user = this.props.match.params.user;
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">
          <i className="id card icon"></i>
          {user}
        </h3>
      </div>
    );
  }
}
*/

export default Card;

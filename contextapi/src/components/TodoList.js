import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Here we are using the Static method for applying the themes
// (see Navbar.js for the Context Consumer method)

class TodoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: "140px",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <p className="item">Plan the family trip</p>
        <p className="item">Go shopping for dinner</p>
        <p className="item">Go for a walk</p>
        <button className="ui button primary" onClick={changeTheme}>
          change the theme
        </button>
      </div>
    );
  }
}

export default TodoList;

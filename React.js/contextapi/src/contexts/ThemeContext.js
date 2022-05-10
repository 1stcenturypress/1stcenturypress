import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: "#2b3a67",
      background: "#ddffff",
    },
    darkTheme: {
      text: "#ddffff",
      background: "#2b3a67",
    },
  };

  //   Adding a user-end theme change option
  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        <div style={{ boxShadow: "1px 1px 5px black" }}>
          {this.props.children}
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

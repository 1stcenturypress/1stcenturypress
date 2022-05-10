// pre-HOOKS implementation...
// import React, { createContext } from "react";
// post-HOOKS implementation...
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

/* pre-HOOKS implementation...
class AuthContextProvider extends React.Component {
  state = {
    isLoggedIn: true,
  };

  changeAuthStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
*/

// post-HOOKS implementation...
const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthStatus = () => {
    setIsLoggedIn(!isLoggedIn); // toggle state
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

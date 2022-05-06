import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";

// Class Based Component version
// 1. JS file loads in browser...
// 2. App gets created...
class App extends React.Component {
  // 3. Constructor function gets called...
  // constructor(props) {
  //   super(props);
  // 4. state gets assigned its object(s)...
  //   this.state = { latitude: null, longitude: null, errorMessage: "" };}

  // Note that the state can be setup with just the following code as well (minus the explcit constructor codiing)

  state = { latitude: null, longitude: null, errorMessage: "" };

  componentDidMount() {
    // 5. geolocation service gets called...
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // 6. React calls components to render...
  render() {
    // 7. App returns JSX, gets rendeered to HTML on page...

    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          {" "}
          <strong>Error: </strong>
          {this.state.errorMessage}
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <div className="ui raised text container segment">
            <strong>Latitude:</strong> {this.state.latitude} |{" "}
            <strong>Longitude:</strong> {this.state.longitude}
          </div>
          <div>
            <HemisphereDisplay latitude={this.state.latitude} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Loading...</strong>
        </div>
      );
    }
  }
}

export default App;

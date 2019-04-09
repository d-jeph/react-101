import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  // constructor(props) {
  //   //we will use this to initialize our state
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ""
  //   };
  // }
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader loaderText="Getting your location ..." />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

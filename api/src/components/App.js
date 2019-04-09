import React from "react";
import Searchbar from "./Searchbar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

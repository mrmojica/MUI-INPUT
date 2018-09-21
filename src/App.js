import React, { Component } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormControl>
          <InputLabel htmlFor="custom-css-input">Custom CSS</InputLabel>
          <Input id="custom-css-input" placeholder={"test-placeholder"} />
        </FormControl>
      </div>
    );
  }
}

export default App;

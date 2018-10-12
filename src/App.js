import React, { Fragment, PureComponent, Component } from "react";
import { FormControl, InputLabel, Input, TextField } from "@material-ui/core";
import "./App.css";
import { DatePicker } from "material-ui-pickers";
/* eslint-disable */
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";

class App extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <FormControl>
            <InputLabel htmlFor="custom-css-input">Custom CSS</InputLabel>
            <Input id="custom-css-input" placeholder={"test-placeholder"} />
          </FormControl>

          <div>
            <TextField label={"TextField"} placeholder={"test-placeholder"} />
          </div>
          <div>
            <input placeholder="placeholder" id="test" />
          </div>
          <div>
            <BasicDatePicker />
            <DatePicker
              label="Basic example"
              value={"10-20-2018"}
              onChange={valueTest => console.log("onchange", valueTest)}
            />
          </div>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

class BasicDatePicker extends PureComponent {
  state = {
    selectedDate: "2018-01-01T00:00:00.000Z"
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>
      </Fragment>
    );
  }
}

// export const App = class Test extends Component {
//   render() {
//     return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <Test />
//       </MuiPickersUtilsProvider>
//     );
//   }
// };

export default App;

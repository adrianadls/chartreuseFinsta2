import React, { Component } from "react";
import "./css/followers.css";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followerstotal: 10000000
    };
  }

  handleFollow = () => {
    this.setState((state) => {
      state.followerstotal += 1;
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Followers">
          <div id={10000000} name={"Chartreuse"} follow={this.handleFollow}>
            <button onClick={() => this.handleFollow()}>
              {this.state.followerstotal}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Followers;

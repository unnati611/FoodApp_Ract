import React, { Component } from "react";
import UserContext from "../Utils/UserContext";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        company: "dummy",
        location: "dummy",
        login: "",
        avatar_url: "",
      },
    };
    // console.log("constructor");
  }
  // apicall

  async componentDidMount() {
    const Data = await fetch("https://api.github.com/users/vandanmshah");
    const ApiData = await Data.json();
    // console.log(ApiData);
    this.setState({
      userInfo: ApiData,
    });
  }

  render() {
    // console.log("Render");
    const { company, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card m-4 p-4">
        <UserContext.Consumer>
          {({ logedinUser }) => <h1 className="font-bold">{logedinUser}</h1>}
        </UserContext.Consumer>
        {/* <h1>Count:{this.state.count}</h1>
        <h1>Count2:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          {" "}
          Increse
        </button> */}

        <img className="w-24 m-4 p-4" src={avatar_url} alt="" />
        <h2>Name:{login}</h2>
        <h3>Location:{location}</h3>
        <h3>Company:{company}</h3>
        <h3>Contact:{this.props.Contact} </h3>
      </div>
    );
  }
}

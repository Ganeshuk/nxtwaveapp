// Home.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {

    h=()=>{
       
        console.log("h")

    }
  render() {
    return (
      <div className="main">
        <nav className="nav">
          <img
            className="img"
            src="https://tse1.mm.bing.net/th?id=OIP.sIO0fdJHt7q9JLegPGKzaAAAAA&pid=Api&P=0&h=180"
            alt="Logo"
          />
          <Link to="/app">
            <button className="btn">Register</button>
          </Link>
        </nav>
        <div className="cardmain">
          <div className="card">
            <h2 className="homeh1">
              GET START YOUR FINANCE TACKER AND MANAGE YOUR EXPENSES
            </h2>
            <Link to="/app" onClick={this.h()}>
              <button className="btn1">Get Started</button>
            </Link>
          </div>
          <img
            className="logo"
            src="https://www.thegreatapps.com/application/upload/Apps/2016/02/personal-finance-moneycoach-income-and-expense-tracker-190.png"
            alt="Logo"
          />
        </div>
      </div>
    );
  }
}

export default Home;

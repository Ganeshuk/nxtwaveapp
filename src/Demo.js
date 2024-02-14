import React, { Component } from "react";
import {v4} from "uuid"
import "./demo.css";

class Demo extends Component {
  state = { p: false };

  get = (e) => {
    e.preventDefault();
    const pay = document.getElementById("1").value;
    const amount = document.getElementById("2").value;
    const data = document.getElementById("3").value;

    if (pay.length !== 0 && amount.length !== 0 && data.length !== 0) {
      const obj = { payment: pay, amount: amount, data: data,id:v4() }; // Changed Data to data
      this.setState({ p: false });

      const v = localStorage.getItem("data");

      if (v === null) {
        localStorage.setItem("data", JSON.stringify([obj]));
      } else {
        const data1=JSON.parse(localStorage.getItem("data"))
        data1.push(obj)
        localStorage.setItem("data",JSON.stringify(data1))
       
        
      }
    } else {
      this.setState((prevState) => ({ p: !prevState.p }));
    }
  };

  render() {
    const { p } = this.state
    const dat=JSON.parse(localStorage.getItem("data"))
    console.log(dat)
    return (
      <div className="main2">
        <nav className="logo1">
          <img
            className="img3"
            src="https://tse1.mm.bing.net/th?id=OIP.sIO0fdJHt7q9JLegPGKzaAAAAA&pid=Api&P=0&h=180"
            alt="lego"
          />
        </nav>
        <div className="dmain">
          <form onSubmit={this.get}>
            <input type="text" placeholder="Enter your income" />

            <input type="text" id="1" placeholder="type of payment" />
            <input type="number" id="2" placeholder="Enter amount" />
            <input type="date" id="3" />
            <button type="submit" id="4" className="btn-1">
              Save
            </button>
            <p>{p ? "Fill all inputs" : ""}</p>
          </form>
          <img
            className="jk"
            src="https://tse4.mm.bing.net/th?id=OIP.7zqbP5IjBnhc0DOF9Tfi8AHaE8&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <hr />
        <ul>
          <li><p>Payment</p><p>Amount</p><p>Time</p></li>
            {dat===null?"":dat.map((each)=>(<li id={each.id}><p>{each.payment}</p><p className="pk">{each.amount}</p><p>{each.data}</p></li>))}
        </ul>
      </div>
    );
  }
}

export default Demo;

import React, { Component } from "react";

class Meal extends Component {
  render() {
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>
          THIS IS A MEAL OF {foodName} + {drinkName}
        </h1>
        <img src={foodUrl} />
        <img src={drinkUrl} />
      </div>
    );
  }
}
export default Meal;

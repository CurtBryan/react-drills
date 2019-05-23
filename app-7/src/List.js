import React, { Component } from "react";
import Todo from "./Todo";

export default class List extends Comonent {
  render() {
    let list = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return <div>{list}</div>;
  }
}

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onReset, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.props.onAdd();
          }}
          className="btn btn-success btn-sm m-2"
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.onResetAll();
          }}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onReset={onReset}
            onDelete={onDelete}
            counter={counter}
          >
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

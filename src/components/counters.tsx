import React, { Component } from "react";
import CounterFC, { Counter } from "./counter";

interface Props {
  onReset: () => void,
  onIncrement: (counter: Counter) => void,
  onDelete: (counterId: number) => void,
  onDecrement: (counter: Counter) => void,
  counters: Counter[],
  onRestart: () => void,
}

class Counters extends Component<Props> {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        {counters.map(counter => (
          <CounterFC
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

import React from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  deleteCounter,
  resetCounter,
  resetAllCounters,
  addCounter,
} from "../redux";
import NavBar from "./navbar";
import Counters from "./counters";

function Main(props) {
  return (
    <>
      <NavBar
        totalCounters={props.counters.filter((c) => c.value > 0).length}
      />
      <main>
        <Counters
          counters={props.counters}
          onIncrement={props.increaseCounter}
          onReset={props.resetCounter}
          onResetAll={props.resetAllCounters}
          onDelete={props.deleteCounter}
          onAdd={props.addCounter}
        />
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: (counter) => dispatch(increaseCounter(counter)),
    deleteCounter: (counterId) => dispatch(deleteCounter(counterId)),
    resetCounter: (counter) => dispatch(resetCounter(counter)),
    resetAllCounters: () => dispatch(resetAllCounters()),
    addCounter: () => dispatch(addCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

/*
          onReset={props.handleReset}
          onChildReset={props.handleChildReset}
          onDelete={props.handleDelete}
          onIncrement={props.handleIncrement}
          onChildAdd={props.handleAdd}
          counters={props.state.counters}
          */

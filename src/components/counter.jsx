import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onReset(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-1"
        >
          Reset
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    //console.log(classes);
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

/*import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    tags: [],
    /*imageUrl: "https://picsum.photos/200",
};

styles = {
  fontSize: 50,
  fontWeight: "bold",
};

renderTags() {
  if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  return (
    <ul>
      {this.state.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

render() {
  return (
    <div> 
      {this.state.tags.length === 0 && "Please create a new tag"}
      {this.renderTags()}
    </div>
  );
}
}
 <button
          /* onClick={() => {
            this.props.onChildReset(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-1"
        >
          Reset
        </button>
        <button
          /*onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"
        ></button>*/

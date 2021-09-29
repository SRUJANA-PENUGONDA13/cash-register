import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <div className="label">{this.props.amountType}</div>
        <div className="ui small input">
          <input
            type="number"
            id={this.props.amountType}
            placeholder="Enter Amount"
            onChange={(event) => this.props.setAmount(event.target.value)}
          ></input>
        </div>
      </div>
    );
  }
}

export default Input;

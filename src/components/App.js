import React from "react";
import Input from "./Input";
import Table from "./Table";
import "./App.css";

class App extends React.Component {
  state = {
    outputState: "inActive",
    errorState: "inActive",
    errorMessage: "",
    BillAmount: 0,
    paymentAmount: 0,
    twoThousandNotes: "",
    fiveHundredNotes: "",
    hundredNotes: "",
    twentyNotes: "",
    tenNotes: "",
    fiveNotes: "",
    oneNotes: "",
  };
  initializeNotes = () => {
    this.setState({
      outputState: "inActive",
      errorState: "inActive",
      errorMessage: "",
      twoThousandNotes: "",
      fiveHundredNotes: "",
      hundredNotes: "",
      twentyNotes: "",
      tenNotes: "",
      fiveNotes: "",
      oneNotes: "",
    });
  };
  validateData = () => {
    const amount1 = parseInt(this.state.BillAmount);
    const amount2 = parseInt(this.state.paymentAmount);
    this.initializeNotes();
    if (amount1 <= 0 || amount2 <= 0) {
      this.setState({
        errorMessage: "Enter valid bill amount and cash given to continue",
        errorState: "active",
      });
    } else if (amount1 > parseInt(amount2)) {
      this.setState({
        errorMessage: "Cash is less than bill, please enter right amount",
        errorState: "active",
      });
    } else {
      this.returnChange(amount1, amount2);
      this.setState({
        outputState: "active",
        errorState: "inActive",
      });
    }
  };

  returnChange = (amount1, amount2) => {
    var change = amount2 - amount1;

    if (change >= 2000) {
      this.setState({ twoThousandNotes: Math.trunc(change / 2000) });
      change = change % 2000;
    }
    if (change >= 500) {
      this.setState({ fiveHundredNotes: Math.trunc(change / 500) });
      change = change % 500;
    }
    if (change >= 100) {
      this.setState({ hundredNotes: Math.trunc(change / 100) });
      change = change % 100;
    }
    if (change >= 20) {
      this.setState({ twentyNotes: Math.trunc(change / 20) });
      change = change % 20;
    }
    if (change >= 10) {
      this.setState({ tenNotes: Math.trunc(change / 10) });
      change = change % 10;
    }
    if (change >= 5) {
      this.setState({ fiveNotes: Math.trunc(change / 5) });
      change = change % 5;
    }
    if (change >= 1) {
      this.setState({ oneNotes: Math.trunc(change / 1) });
      change = change % 1;
    }
  };
  render() {
    return (
      <div className="cashRegister">
        <div>
          <h1>Cash Register Manager</h1>
          <p className="ui content">
            Enter the bill amount and cash given by the customer and know
            minimum number of notes to return.
          </p>
        </div>
        <div className="accountSection">
          <Input
            amountType="Bill Amount:"
            setAmount={(amount) => this.setState({ BillAmount: amount })}
          />
          <Input
            amountType="Cash Given:"
            setAmount={(amount) => this.setState({ paymentAmount: amount })}
          />
          <button
            id="checkBtn"
            className="ui button"
            onClick={this.validateData}
          >
            Check
          </button>
        </div>
        <div className={`errorMsg ${this.state.errorState}`}>
          <p className="ui content">{this.state.errorMessage}</p>
        </div>
        <div className={`returnAmount ${this.state.outputState}`}>
          <div className="label">Return Change:</div>
          <Table
            twoThousandNotes={this.state.twoThousandNotes}
            fiveHundredNotes={this.state.fiveHundredNotes}
            hundredNotes={this.state.hundredNotes}
            twentyNotes={this.state.twentyNotes}
            tenNotes={this.state.tenNotes}
            fiveNotes={this.state.fiveNotes}
            oneNotes={this.state.oneNotes}
          />
        </div>
      </div>
    );
  }
}

export default App;

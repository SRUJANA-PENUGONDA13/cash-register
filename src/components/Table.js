import React from "react";

class Table extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table className="ui unstackable celled table">
          <tbody>
            <tr>
              <td>No.of Notes</td>
              <td className="noOfNotes">{this.props.twoThousandNotes}</td>
              <td className="noOfNotes">{this.props.fiveHundredNotes}</td>
              <td className="noOfNotes">{this.props.hundredNotes}</td>
              <td className="noOfNotes">{this.props.twentyNotes}</td>
              <td className="noOfNotes">{this.props.tenNotes}</td>
              <td className="noOfNotes">{this.props.fiveNotes}</td>
              <td className="noOfNotes">{this.props.oneNotes}</td>
            </tr>
            <tr>
              <td>Note</td>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;

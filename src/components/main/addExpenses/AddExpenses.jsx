import React from "react";
import "./AddExpenses.css";

function AddExpenses(props) {
  return (
    <div className="AddContainer">
      <p className="AddTitle">Add Expenses</p>
      <div className="inputsContainer">
        <input
          placeholder="Name"
          type="text"
          className="inputExpense"
          onChange={props.handleNameInput}
          value={props.nameExpense}
        />
        <input
          placeholder="Cost"
          type="number"
          className="inputExpense costExpense"
          onChange={props.handleCostInput}
          value={props.costExpense}
        />
      </div>
      {props.error !== null ? <p className="error">{props.error}</p> : null}
      <div onClick={props.handleAddExpense} className="saveButton">
        Save
      </div>
    </div>
  );
}

export default AddExpenses;

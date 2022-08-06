import React from "react";
import "./MoneyBlock.css";

function MoneyBlock(props) {
  return (
    <div className="block_container">
      <div className="title">
        {props.title}:
        {props.showInput === true ? (
          <input
            onChange={props.handleBudgetInput}
            type="number"
            className="moneyInput"
          />
        ) : (
          props.money + "$"
        )}
      </div>
      {props.showButton === "true" ? (
        <div onClick={props.handleEditButton} className="editButton">
          {props.showInput === true ? "SET" : "EDIT"}
        </div>
      ) : null}
    </div>
  );
}

export default MoneyBlock;

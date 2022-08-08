import React from "react";
import "./TopMoney.css";
import MoneyBlock from "./MoneyTile/MoneyBlock";

function Top_money(props) {
  return (
    <div className="Top_container">
      <div className="Up">
        <p className="Top_title">My Budget Management</p>
      </div>
      <div className="Down">
        <MoneyBlock
          handleEditButton={props.handleEditButton}
          title="Budget"
          showButton="true"
          showInput={props.showInput}
          money={props.budget}
          handleBudgetInput={props.handleBudgetInput}
        />
        <MoneyBlock money={props.remain} title="Remaining" />
        <MoneyBlock money={props.spent} title="Spent so far" />
      </div>
    </div>
  );
}

export default Top_money;

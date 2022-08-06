import React, { useEffect, useState } from "react";
import "./TopMoney.css";
import MoneyBlock from "./MoneyTile/MoneyBlock";

function Top_money() {
  const [showInput, setShowInput] = useState(false);
  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [spent, setSpent] = useState(0);

  const handleEditButton = () => {
    if (showInput === false) {
      setShowInput(true);
    } else if (showInput === true) {
      setShowInput(false);
    }
  };

  const handleBudgetInput = (e) => {
    setBudget(e.target.value);
  };

  useEffect(() => {
    setRemain(budget - spent);
  }, [showInput]);
  return (
    <div className="Top_container">
      <div className="Up">
        <p className="Top_title">My Budget Management</p>
      </div>
      <div className="Down">
        <MoneyBlock
          handleEditButton={handleEditButton}
          title="Budget"
          showButton="true"
          showInput={showInput}
          money={budget}
          handleBudgetInput={handleBudgetInput}
        />
        <MoneyBlock money={remain} title="Remaining" />
        <MoneyBlock money={spent} title="Spent so far" />
      </div>
    </div>
  );
}

export default Top_money;

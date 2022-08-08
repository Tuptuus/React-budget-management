import React, { useEffect } from "react";
import { useState } from "react";
import List from "../expensesList/List";
import TopMoney from "../Top/TopMoney";
import AddExpenses from "./addExpenses/AddExpenses";
import "./App.css";

function App() {
  const [expensesList, setExpensesList] = useState([]);
  const [error, setError] = useState(null);
  const [nameExpense, setNameExpense] = useState("");
  const [costExpense, setCostExpense] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [budget, setBudget] = useState(0);
  const [remain, setRemain] = useState(0);
  const [spent, setSpent] = useState(0);
  const [id, setId] = useState(1);

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
    console.log("działa");
  });

  const handleAddExpense = () => {
    let tempExpenseList = [];
    if (nameExpense && costExpense && costExpense) {
      if (costExpense > remain) {
        setError("You don't have enough money");
        setTimeout(() => {
          setError(null);
        }, 5000);
      } else {
        tempExpenseList.push({
          id: id,
          expenseName: nameExpense,
          expenseCost: costExpense,
        });
        setExpensesList(tempExpenseList.concat(expensesList));
        setSpent(parseInt(spent) + parseInt(costExpense));
        setError(false);
        setNameExpense("");
        setCostExpense("");
        setId(id + 1);
      }
    } else {
      setError("You must fill all inputs");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleDeleteItem = (item) => {
    console.log(item.id);
    const newArray = expensesList.filter((itemek) => itemek.id !== item.id);
    setExpensesList(newArray);
  };

  const handleNameInput = (e) => {
    setNameExpense(e.target.value);
  };
  const handleCostInput = (e) => {
    setCostExpense(e.target.value);
  };
  return (
    <div className="App">
      <div className="Top">
        <TopMoney
          handleEditButton={handleEditButton}
          showInput={showInput}
          budget={budget}
          handleBudgetInput={handleBudgetInput}
          remain={remain}
          spent={spent}
        />
      </div>
      <div className="Main">
        <List expensesList={expensesList} handleDeleteItem={handleDeleteItem} />
      </div>
      <div className="Bottom">
        <AddExpenses
          handleNameInput={handleNameInput}
          handleCostInput={handleCostInput}
          handleAddExpense={handleAddExpense}
          error={error}
          costExpense={costExpense}
          nameExpense={nameExpense}
        />
      </div>
    </div>
  );
}

export default App;

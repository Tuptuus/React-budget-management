import React from "react";
import ElementList from "./ElementList";
import "./List.css";

function List(props) {
  return (
    <div className="ListContainer">
      <ElementList
        handleDeleteItem={props.handleDeleteItem}
        expensesList={props.expensesList}
      />
    </div>
  );
}

export default List;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const trash = <FontAwesomeIcon icon={faTrash} />;

let Elements = [];

function ElementList(props) {
  Elements = props.expensesList.map((item) => (
    <div className="listBlock">
      <p className="listTitle">{`${item.expenseName}: ${item.expenseCost}$`}</p>
      <span onClick={() => props.handleDeleteItem(item)} className="trashIcon">
        {trash}
      </span>
    </div>
  ));
  return <>{Elements}</>;
}

export default ElementList;

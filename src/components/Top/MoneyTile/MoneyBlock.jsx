import React from "react";
import "./MoneyBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";

const Edit = <FontAwesomeIcon icon={faPenToSquare} />;
const Save = <FontAwesomeIcon icon={faCheck} />;

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
            value={props.money}
          />
        ) : (
          props.money + "$"
        )}
      </div>
      {props.showButton === "true" ? (
        <div onClick={props.handleEditButton} className="editButton">
          {props.showInput === true ? (
            <span className="save">{Save}</span>
          ) : (
            <span className="edit">{Edit}</span>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default MoneyBlock;

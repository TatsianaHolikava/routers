
import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.value > 0 ? "+" : "-"

  return (
    <div>
      <li className={transaction.value < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>{sign}${Math.abs(transaction.value)}</span>
        <button className="delete-btn" onClick={(() => deleteTransaction(transaction.id))}>x</button>
      </li>
    </div>
  );
};

export default Transaction;

import React from "react";
import "./express-tracker.css";
import Balance from "./balance";
import Income from "./income";

import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import TransactionList from "./TransactionList";

function ExpenseTracker() {
  return (
    <GlobalProvider>
      <div className="body">
      <div className="inner-box">
      <h3>Expense tracker</h3>
      <h4>
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </h4>
      </div>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTracker;

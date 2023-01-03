import React, {useContext} from 'react';
import {GlobalContext} from "./context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)


    return (
        <div>
            <h4>History</h4>
            <hr/>
            <ul className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
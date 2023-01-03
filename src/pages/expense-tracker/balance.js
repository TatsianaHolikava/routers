import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.value);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
       return (
        <div className="container">
            <h4>Your balance: </h4>
            <h3 id="balance">${total}</h3>
        </div>
    );
};

export default Balance;
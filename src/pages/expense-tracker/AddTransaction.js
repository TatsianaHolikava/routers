import React, {useContext, useState} from 'react';
import { GlobalContext } from './context/GlobalState';
import "./express-tracker.css";

const AddTransaction = () => {
    const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random(),
      text,
      amount:+amount
    }
    console.log(amount)
    addTransaction(newTransaction);
  }
  return (
    <div>
      <h4>Add new transaction</h4>
      <hr />
      <form onSubmit={onSubmit}>
      <div className="form-control">
      <label  htmlFor="text">Text</label>
      <input type="text" placeholder="Enter text..." 
      onChange={(e) => setText(e.target.value)}/>
    </div>

    <div className="form-control">
      <label  htmlFor="amount">Amount</label>
      <input type="number" placeholder="Enter amount..." 
     onChange={(e) => setAmount(e.target.value)} />
    </div>
    <button className="btn">Add transaction</button>
    </form>
  </div>
      
   
  );
};

export default AddTransaction;

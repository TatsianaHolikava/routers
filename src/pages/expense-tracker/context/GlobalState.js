import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";


const initialState = {
    transactions: [
        {id: Math.random(), text: 'ATM Deposit(Cash)', value: +200.34},
        {id: Math.random(), text: 'AldoINC*AldoShoes', value: -89.98},
        {id: Math.random(), text: 'WALMART', value: -198.25},
        {id: Math.random(), text: 'DCCA', value: +1459.19},
        {id: Math.random(), text: 'LIDL #1132', value: -163.58}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
import { createContext, useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TXN":
      return [...state, action.payload];
    case "DEL_TXN":
      return state.filter((transaction) => transaction.id !== action.payload);
    default:
      return state;
  }
}

export const TransactionContext = createContext();

export function TransactionProvider(props) {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  function addTransaction(newTransaction) {
    dispatch({ type: "ADD_TXN", payload: newTransaction });
  }

  function deleteTransaction(id) {
    dispatch({ type: "DEL_TXN", payload: id });
  }

  return (
    <TransactionContext.Provider
      value={[transactions, addTransaction, deleteTransaction]}
      {...props}
    />
  );
}

import { createContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider(props) {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function deleteTransaction(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <TransactionContext.Provider
      value={[transactions, addTransaction, deleteTransaction]}
      {...props}
    />
  );
}

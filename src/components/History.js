import Transaction from "./Transaction";
import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

function History() {
  const [transactions] = useContext(TransactionContext);

  return (
    <article id="history">
      <header>
        <h5 className="bdr-b">History</h5>
      </header>
      {transactions.length ? (
        <ul>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </ul>
      ) : (
        <p className="info">No transactions yet!</p>
      )}
    </article>
  );
}

export default History;

import Transaction from "./Transaction";
import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

function History() {
  const [transactions] = useContext(TransactionContext);

  return (
    <article id="history">
      <h6 className="bdr-b">HISTORY</h6>

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

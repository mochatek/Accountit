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
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </article>
  );
}

export default History;

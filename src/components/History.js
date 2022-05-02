import Transaction from "./Transaction";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

function History() {
  const { transactions } = useContext(AppContext);

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
        <p>No transactions yet!</p>
      )}
    </article>
  );
}

export default History;

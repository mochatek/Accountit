import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

function Transaction({ id, name, amount }) {
  const [, , deleteTransaction] = useContext(TransactionContext);

  return (
    <li className={amount > 0 ? "income" : "expense"}>
      <span className="deleteBtn" onClick={() => deleteTransaction(id)}>
        ✖
      </span>
      {name}
      <span>{amount}</span>
    </li>
  );
}

export default Transaction;

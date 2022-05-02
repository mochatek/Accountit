import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

function Transaction({ id, name, amount }) {
  const { deleteTransaction } = useContext(AppContext);

  return (
    <li className={amount > 0 ? "income" : "expense"}>
      <span className="delete-btn" onClick={() => deleteTransaction(id)}>
        ✖
      </span>
      {name}
      <span>{amount}</span>
    </li>
  );
}

export default Transaction;

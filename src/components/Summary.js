import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

function Summary() {
  const [transactions] = useContext(TransactionContext);

  const { totalIncome, totalExpense } = transactions.reduce(
    (acc, cur) => {
      if (cur.amount > 0) {
        acc.totalIncome += cur.amount;
      } else {
        acc.totalExpense += Math.abs(cur.amount);
      }

      return acc;
    },
    {
      totalIncome: 0,
      totalExpense: 0,
    }
  );

  return (
    <article id="summary">
      <Balance amount={Math.abs(totalIncome - totalExpense)} />
      <IncomeExpense income={totalIncome} expense={totalExpense} />
    </article>
  );
}

export default Summary;

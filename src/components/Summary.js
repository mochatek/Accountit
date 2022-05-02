import Balance from "./Balance";
import ModalButton from "./ModalButton";
import IncomeExpense from "./IncomeExpense";
import AccountsChart from "./AccountsChart";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

function Summary() {
  const { transactions, modal, openChartModal } = useContext(AppContext);

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
      <div>
        <Balance amount={Math.abs(totalIncome - totalExpense)} />
        <ModalButton openChartModal={openChartModal} />
      </div>
      <IncomeExpense income={totalIncome} expense={totalExpense} />
      {modal && <AccountsChart />}
    </article>
  );
}

export default Summary;

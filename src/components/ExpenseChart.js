import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TransactionContext } from "../contexts/TransactionContext";
import { useContext } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const options = {
  responsive: true,
};

function ExpenseChart() {
  const [transactions] = useContext(TransactionContext);

  const summary = transactions.reduce((acc, { category, amount }) => {
    const amountKey = amount < 0 ? "expense" : "income";
    if (category in acc) {
      acc[category][amountKey] = acc[category][amountKey] + Math.abs(amount);
    } else {
      acc[category] = { income: 0, expense: 0, [amountKey]: Math.abs(amount) };
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(summary),
    datasets: [
      {
        label: "Income",
        data: Object.values(summary).map((key) => key.income),
        backgroundColor: "hsla(120, 100%, 35%, 0.5)",
        stack: "1",
      },
      {
        label: "Expense",
        data: Object.values(summary).map((key) => key.expense),
        backgroundColor: "hsla(0, 100%, 50%, 0.5)",
        stack: "1",
      },
    ],
  };

  return (
    <article id="expenseChart">
      <h4 className="bdr-b">Expense Chart</h4>
      <Bar options={options} data={data} />
    </article>
  );
}

export default ExpenseChart;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const options = {
  responsive: true,
};

function AccountsChart() {
  const { transactions, closeChartModal } = useContext(AppContext);

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
        backgroundColor: "hsla(0, 90%, 75%, 0.75)",
        stack: "1",
      },
    ],
  };

  return (
    <div id="chart-modal">
      <article>
        <button onClick={closeChartModal}>❌</button>
        <h6 className="bdr-b">ACCOUNTS CHART</h6>
        <Bar options={options} data={data} />
      </article>
    </div>
  );
}

export default AccountsChart;

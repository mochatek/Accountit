function IncomeExpense({ income, expense }) {
  return (
    <section id="income-expense">
      <div>
        <h6>INCOME</h6>
        <h4 className="income">₹{income.toFixed(2)}</h4>
      </div>
      <div>
        <h6>EXPENSE</h6>
        <h4 className="expense">₹{expense.toFixed(2)}</h4>
      </div>
    </section>
  );
}

export default IncomeExpense;

function IncomeExpense({ income, expense }) {
  return (
    <section className="col-2">
      <div className="line-2 center">
        <h6>INCOME</h6>
        <h4 className="income">₹{income.toFixed(2)}</h4>
      </div>
      <div className="line-2 center">
        <h6>EXPENSE</h6>
        <h4 className="expense">₹{expense.toFixed(2)}</h4>
      </div>
    </section>
  );
}

export default IncomeExpense;

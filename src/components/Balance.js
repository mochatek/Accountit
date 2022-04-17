function Balance({ amount }) {
  return (
    <header className="line-2">
      <h6>YOUR BALANCE</h6>
      <h2>₹{amount.toFixed(2)}</h2>
    </header>
  );
}

export default Balance;

import { TransactionContext } from "../contexts/TransactionContext";
import { useState, useRef, useContext } from "react";

function NewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const [, addTransaction] = useContext(TransactionContext);

  function changeHandler(event) {
    if (event.target.name === "text") {
      setText(event.target.value);
    } else if (event.target.name === "amount") {
      event.target.value.match(/^[-+]?\d*$/) && setAmount(event.target.value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (text && amount) {
      addTransaction({
        id: new Date().getTime().toString(36),
        name: text,
        amount: +amount,
      });
      setText("");
      setAmount("");
      inputRef.current.focus();
    }
  }

  return (
    <article id="newTransaction">
      <header>
        <h5 className="bdr-b">Add new transaction</h5>
      </header>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            placeholder="Entext text..."
            value={text}
            onChange={changeHandler}
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount: Expense (-) | Income (+)</label>
          <input
            type="text"
            name="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </article>
  );
}

export default NewTransaction;

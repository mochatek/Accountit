import { TransactionContext } from "../contexts/TransactionContext";
import { useState, useRef, useContext } from "react";

function NewTransaction() {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);
  const [, addTransaction] = useContext(TransactionContext);

  function changeHandler(event) {
    switch (event.target.name) {
      case "category":
        setCategory(event.target.value.toUpperCase());
        break;
      case "text":
        setText(event.target.value);
        break;
      case "amount":
        event.target.value.match(/^[-+]?\d*$/) && setAmount(event.target.value);
        break;
      default:
        break;
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (text && amount) {
      addTransaction({
        id: new Date().getTime().toString(36),
        category,
        name: text,
        amount: +amount,
      });
      setCategory("");
      setText("");
      setAmount("");
      inputRef.current.focus();
    }
  }

  return (
    <article id="newTransaction">
      <h6 className="bdr-b">NEW TRANSACTION</h6>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category..."
            value={category}
            onChange={changeHandler}
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            placeholder="Entext text..."
            value={text}
            onChange={changeHandler}
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

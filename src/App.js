import Header from "./components/Header";
import Summary from "./components/Summary";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { TransactionProvider } from "./contexts/TransactionContext";
import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TransactionProvider>
        <Summary />
        <History />
        <NewTransaction />
      </TransactionProvider>
    </Fragment>
  );
}

export default App;

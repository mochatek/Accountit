import Header from "./components/Header";
import Summary from "./components/Summary";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import AccountsChart from "./components/AccountsChart";
import { TransactionProvider } from "./contexts/TransactionContext";
import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <TransactionProvider>
        <main>
          <div>
            <Summary />
            <History />
            <NewTransaction />
          </div>
          <div>
            <AccountsChart />
          </div>
        </main>
      </TransactionProvider>
    </Fragment>
  );
}

export default App;

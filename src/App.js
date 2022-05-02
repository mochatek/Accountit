import Header from "./components/Header";
import Summary from "./components/Summary";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { AppProvider } from "./contexts/AppContext";
import { Fragment } from "react";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Header />
      <AppProvider>
        <main>
          <Summary />
          <History />
          <NewTransaction />
        </main>
      </AppProvider>
    </Fragment>
  );
}

export default App;

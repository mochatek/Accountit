import { createContext, useReducer } from "react";

const [ADD_TXN, DEL_TXN, OPEN_CHART, CLOSE_CHART] = [
  "ADD_TXN",
  "DEL_TXN",
  "OPEN_CHART",
  "CLOSE_CHART",
];

const initialState = {
  transactions: [],
  modal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TXN:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case DEL_TXN:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case OPEN_CHART:
      return {
        ...state,
        modal: true,
      };
    case CLOSE_CHART:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTransaction(newTransaction) {
    dispatch({ type: ADD_TXN, payload: newTransaction });
  }

  function deleteTransaction(id) {
    dispatch({ type: DEL_TXN, payload: id });
  }

  function openChartModal() {
    dispatch({ type: OPEN_CHART });
  }

  function closeChartModal() {
    dispatch({ type: CLOSE_CHART });
  }

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        modal: state.modal,
        addTransaction,
        deleteTransaction,
        openChartModal,
        closeChartModal,
      }}
      {...props}
    />
  );
}

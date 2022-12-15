import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initial = {
  transactions: [
    {id: 1, text: "flower 1", amount: -20},
    {id: 2, text: "flower 2", amount: 20},
    {id: 3, text: "flower 3", amount: -20},
  ],
};

export const GlobalContext = createContext(initial);

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initial);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

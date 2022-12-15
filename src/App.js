import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container pt-5 w-25 cont">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

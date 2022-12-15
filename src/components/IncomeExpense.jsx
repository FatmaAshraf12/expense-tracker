import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map((e) => e.amount);
  const income = amounts
    .filter((e) => e > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((e) => e < 0)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <div className="inc-exp-container d-flex m-auto justify-content-center mb-4">
      <div className="border border-right p-5 pt-1 pb-1 text-center">
        <h5 className="text-success">Income</h5>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div className="border p-5 pt-1 pb-1 text-center">
        <h5 className="text-danger">Expense</h5>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;

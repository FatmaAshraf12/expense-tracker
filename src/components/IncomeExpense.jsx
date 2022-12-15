const IncomeExpense = () => {
  return (
    <div className="inc-exp-container d-flex m-auto justify-content-center mb-4">
      <div className="border border-right p-5 pt-1 pb-1">
        <h5>Income</h5>
        <p id="money-plus" className="money plus">
          +$0.00
        </p>
      </div>
      <div className="border p-5 pt-1 pb-1">
        <h5>Expense</h5>
        <p id="money-minus" className="money minus">
          -$0.00
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;

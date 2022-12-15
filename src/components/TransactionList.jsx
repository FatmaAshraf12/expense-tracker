import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import TransactionItem from "./TransactionItem";
const TransactionList = () => {
  const data = useContext(GlobalContext);
  return (
    <div className="mb-4">
      <h5>History</h5>
      <ul className="trans-list">
        {data.transactions.length == 0 && (
          <span className="text-danger">No transactions found</span>
        )}
        {data &&
          data.transactions.map((trans) => (
            <TransactionItem key={trans.id} item={trans} />
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;

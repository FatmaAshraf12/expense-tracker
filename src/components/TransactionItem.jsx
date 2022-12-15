import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const TransactionItem = ({item}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = item.amount < 0 ? "-" : "+";
  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}
      <span className="ms-4">
        {sign}${Math.abs(item.amount)}
      </span>
      <button
        className="btn btn-danger btn-sm float-right"
        onClick={() => deleteTransaction(item.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;

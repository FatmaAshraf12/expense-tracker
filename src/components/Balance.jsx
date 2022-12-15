import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map((e) => e.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="m-auto text-left mb-4">
      <h5>
        Your Balance : <span id="balance">${total}</span>
      </h5>
    </div>
  );
};

export default Balance;

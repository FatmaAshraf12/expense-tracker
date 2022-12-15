import {useState} from "react";
import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    if (!text || !amount) alert("please fill all fields");
    else {
      e.preventDefault();

      const newTrans = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: Number(amount),
      };
      addTransaction(newTrans);
      setAmount(0);
      setText("");
    }
  };

  return (
    <div>
      <h5>Add new transaction</h5>
      <form onSubmit={onSubmit}>
        <div className="form-control border-0">
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            id="text"
            className="w-100"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control border-0">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            required
            type="number"
            id="amount"
            className="w-100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn btn-danger mt-4">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

const TransactionList = () => {
  return (
    <div className="mb-4">
      <h5>History</h5>
      <ul className="trans-list">
        <li className="p-2">
          Cash <span>-$400</span>
          <button className="btn btn-danger btn-sm float-right">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;

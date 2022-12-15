const AddTransaction = () => {
  return (
    <div>
      <h5>Add new transaction</h5>
      <form>
        <div className="form-control border-0">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" className="w-100" />
        </div>
        <div className="form-control border-0">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" className="w-100" />
        </div>
        <button className="btn btn-danger mt-4">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

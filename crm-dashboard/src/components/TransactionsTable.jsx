const TransactionsTable = () => {
    const transactions = [
      { name: 'J. Doe', plan: 'Pro', amount: '$49', date: '2025-07-08' },
      { name: 'S. Ray', plan: 'Advanced', amount: '$19', date: '2025-07-07' },
      { name: 'M. Lee', plan: 'Enterprise', amount: '$99', date: '2025-07-06' }
    ];
  
    return (
      <div className="card">
        <h4>Transactions</h4>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.name}</td>
                <td>{tx.plan}</td>
                <td>{tx.amount}</td>
                <td>{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TransactionsTable;
  
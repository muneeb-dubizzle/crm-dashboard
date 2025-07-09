const SupportTickets = () => {
    const tickets = [
      { id: '#1023', email: 'jane@example.com', issue: 'Login Issue', date: '2025-07-08', status: 'Open', color: 'var(--primary-color)' },
      { id: '#1022', email: 'joe@domain.com', issue: 'Billing Inquiry', date: '2025-07-07', status: 'Pending', color: 'var(--secondary-color)' },
      { id: '#1021', email: 'amy@domain.com', issue: 'Bug Report', date: '2025-07-06', status: 'Closed', color: 'var(--accent-color)' },
      { id: '#1020', email: 'mike@domain.com', issue: 'Feature Request', date: '2025-07-05', status: 'Open', color: 'var(--primary-color)' }
    ];
  
    return (
      <div className="support-section">
        <h4>Support Tickets</h4>
        <div className="filters">
          <button>All</button>
          <button>Open</button>
          <button>Pending</button>
          <button>Closed</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Issue</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, index) => (
              <tr key={index}>
                <td>{t.id}</td>
                <td>{t.email}</td>
                <td>{t.issue}</td>
                <td>{t.date}</td>
                <td style={{ color: t.color }}>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SupportTickets;
  
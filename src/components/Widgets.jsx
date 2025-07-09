const widgetsData = [
    { title: 'Current MRR', value: '$12.4k' },
    { title: 'Current Customers', value: '16,601' },
    { title: 'Active Customers', value: '33%' },
    { title: 'Churn Rate', value: '2%' },
  ];
  
  const Widgets = () => (
    <div className="widgets">
      {widgetsData.map((w, i) => (
        <div className="widget" key={i}>
          <h3>{w.title}</h3>
          <p>{w.value}</p>
        </div>
      ))}
    </div>
  );
  
  export default Widgets;
  